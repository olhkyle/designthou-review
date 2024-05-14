'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, useRef } from 'react';
import { FaRegImage, FaPlus } from 'react-icons/fa6';
import { createClient } from '@/supabase/client';
import { MdClose } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { Button, Flex, TextArea, CourseSelect, Loading } from '.';
import { v4 as uuid } from 'uuid';
import route from '@/constants/route';
import userState from '@/recoil/atom/userState';

const DEFAULT_FILE_SIZE = 1 * 1024 * 1024;

export default function ReviewRegister() {
	const supabase = createClient();
	const router = useRouter();

	const user = useRecoilValue(userState);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [course, setCourse] = useState('');
	const [isRegisterLoading, setRegisterLoading] = useState(false);

	const imageRef = useRef<HTMLInputElement | null>(null);
	const [postImages, setPostImages] = useState<File[]>([]);
	const [previewImageUrl, setPreviewImageUrl] = useState<string>('');

	const [isRegisterToolOpened, setRegisterToolOpened] = useState<boolean>(false);

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const images = e.target.files;
		const currentImgFileSize = images?.[0].size ?? 0;

		if (currentImgFileSize > DEFAULT_FILE_SIZE) {
			alert('이미지 사이즈가 제한됩니다.');
			return;
		}

		if (images?.length) {
			const fileReader = new FileReader();

			fileReader.readAsDataURL(images[0]);
			fileReader.onloadend = () => {
				setPreviewImageUrl((fileReader.result ?? '').toString());
			};

			setPostImages([...Array.from(images), ...postImages]);
		}
	};

	const uploadImageOnStorage = async () => {
		try {
			if (postImages.length === 0) return;

			setRegisterLoading(true);

			const [uploadImage, getReviews] = await Promise.all([
				await supabase.storage.from('review_images').upload(`reviews/${uuid()}`, postImages[0], {
					cacheControl: '3600',
					upsert: false,
				}),
				await supabase.from('reviews').select('*'),
			]);

			const { error: reviewUploadError } = await supabase
				.from('reviews')
				.insert([
					{
						id: Math.max(...(getReviews?.data?.map(({ id }) => id) ?? [])) + 1,
						content,
						title,
						imgSrc: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/${process.env.NEXT_PUBLIC_SUPABASE_REVIEWIMAGE_URL}/${uploadImage?.data?.path}`,
						course,
						username: user?.username,
					},
				])
				.select();

			if (uploadImage.error) {
				throw { error: uploadImage.error, message: '이미지를 업로드하는데 문제가 발생하였습니다' };
			} else if (reviewUploadError) {
				throw { error: reviewUploadError, message: '후기 업로드에 문제가 발생하였습니다' };
			}

			router.push(`${route.MYPAGE}/${user?.userId}`);
		} catch (error) {
			console.error('문제가 발생하였습니다', error);
		} finally {
			setRegisterLoading(false);
		}
	};

	return (
		<Flex
			position="relative"
			direction="col"
			alignItems="items-start"
			margin={'mt-2'}
			additionalStyle="px-4 py-6 bg-gray-50 border-[1px] border-gray-300 rounded-lg">
			<input
				type="text"
				placeholder="제목"
				value={title}
				onChange={e => setTitle(e.target.value)}
				className="mb-2 px-4 py-2 w-[90%] placeholder:text-gray-500 border-[1px] border-gray-200 rounded-lg outline-offset-2 appearance-none resize-none overflow-hidden cursor-pointer focus:outline-2 focus:outline-rose-200 hover:bg-gray-100"
			/>

			<TextArea
				content={content}
				placeholder={'후기를 남겨주세요'}
				width={'w-[90%]'}
				setContent={setContent}
				eventHandler={() => setRegisterToolOpened(true)}
			/>

			<CourseSelect target={course} setTarget={setCourse} />

			<div
				className={`${
					isRegisterToolOpened ? 'block w-full h-auto' : 'invisible h-0 overflow-hidden'
				} transition-all ease-in-out`}>
				<div className="flex flex-col gap-2 mt-3 w-full sm:flex-row sm:gap-6">
					<div className="flex gap-2">
						<div
							className="flex flex-col justify-center items-center py-2 bg-white rounded-lg border-[1px] cursor-pointer hover:bg-gray-100 hover:border-gray-600"
							onClick={() => {
								imageRef.current?.click();
							}}>
							<input
								type="file"
								id="review_image"
								name="review_image"
								alt="review_upload"
								accept="image/*"
								ref={imageRef}
								onChange={handleImageUpload}
								className="hidden"
							/>
							<FaRegImage size={21} />
							<label
								htmlFor="review_image"
								className="flex justify-center items-center mt-2 w-[150px] text-sm cursor-pointer">
								Upload Image
							</label>
						</div>

						<div className="relative">
							{postImages.length && previewImageUrl ? (
								<>
									<Image src={previewImageUrl} alt="preview_image" width={150} height={100} className="rounded-lg" />
									<button
										className="absolute top-0 right-0 bg-gray-700 text-white rounded-md object-cover"
										onClick={() => {
											setPreviewImageUrl('');
											setPostImages([]);
										}}>
										<MdClose size={18} />
									</button>
								</>
							) : (
								<div className="w-[150px] h-[100px] border-[2px] border-dotted border-dark rounded-lg" />
							)}
						</div>
					</div>
					<div className="mt-1 sm:mt-2">
						<p className="px-2 py-1 text-gray-700 text-sm">1. 후기는 500자로 제한됩니다.</p>
						<p className="px-2 py-1 text-gray-700 text-sm">2. 수강하신 코스를 선택해 주세요.</p>
						<p className="px-2 py-1 text-gray-700 text-sm">3. 최대 1개의 이미지를 업로드하실 수 있습니다.</p>
					</div>
				</div>
				<div className="flex justify-between items-center mt-4">
					<Button
						type={'button'}
						className={`inline-flex justify-center items-center gap-4 ml-auto mr-2 w-full rounded-lg text-white sm:w-full ${
							content.length === 0 || course.length === 0
								? 'bg-gray-400 text-gray-700 '
								: 'bg-orange-200 hover:bg-orange-100'
						}`}
						disabled={content.length === 0 || title.length === 0}
						onClick={uploadImageOnStorage}>
						등 록 {isRegisterLoading ? <Loading /> : null}
					</Button>
					<Button
						type={'button'}
						className={`w-full rounded-lg text-gray-700 sm:w-full bg-gray-400 border-[1px] hover:border-gray-500`}
						onClick={() => {
							setTitle('');
							setContent('');
							setCourse('');
							setPreviewImageUrl('');
							setPostImages([]);
						}}>
						취 소
					</Button>
				</div>
			</div>

			<FaPlus
				size={24}
				color={'var(--color-white)'}
				className={`${
					isRegisterToolOpened ? 'rotate-45' : 'rotate-0'
				} absolute top-2 right-2 bg-dark rounded-full cursor-pointer transition-all sm:top-4 sm:right-4`}
				onClick={() => setRegisterToolOpened(!isRegisterToolOpened)}
			/>
		</Flex>
	);
}
