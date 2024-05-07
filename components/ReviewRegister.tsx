'use client';

import Image from 'next/image';
import { ChangeEvent, useState, useRef } from 'react';
import { Button, Flex, TextArea, CourseSelect } from '.';
import { v4 as uuid } from 'uuid';
import { FaRegImage } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import { createClient } from '@/supabase/client';

export default function ReviewRegister() {
	const supabase = createClient();
	const [content, setContent] = useState('');
	const [target, setTarget] = useState('');

	const imageRef = useRef<HTMLInputElement | null>(null);
	const [postImages, setPostImages] = useState<File[]>([]);
	const [previewImageUrl, setPreviewImageUrl] = useState<string>('');

	const [isTextAreaClicked, setTextAreaClicked] = useState<boolean>(false);

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const images = e.target.files;

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
			const newFileName = uuid();

			const { data, error } = await supabase.storage
				.from('review_images')
				.upload(`reviews/${newFileName}`, postImages[0], {
					cacheControl: '3600',
					upsert: false,
				});

			if (error) {
				console.error('이미지를 업로드하는데 문제가 발생하였습니다');
			}
			console.log(data);

			// 마이페이지 내에 내가 작성한 후기 페이지로 이동
		} catch (error) {
			console.error('문제가 발생하였습니다', error);
		}
	};

	return (
		<Flex
			direction="col"
			alignItems="items-start"
			margin={'mt-6'}
			additionalStyle="px-2 py-4 bg-gray-50 border-[1px] border-gray-300 rounded-lg">
			<Flex gap={'gap-2'} justifyContent={'justify-center'}>
				<TextArea
					content={content}
					placeholder={'후기를 남겨주세요'}
					width={'w-[100%]'}
					setContent={setContent}
					eventHandler={() => setTextAreaClicked(true)}
				/>
			</Flex>

			<CourseSelect target={target} setTarget={setTarget} />

			<div className={`${isTextAreaClicked ? 'block w-full h-auto' : 'invisible h-0'} transition-all ease-in-out`}>
				<div className="flex flex-col gap-2 mt-3 w-full sm:flex-row sm:gap-6">
					<div className="flex gap-2">
						<div
							className={`flex flex-col justify-center items-center py-2 bg-white rounded-lg border-[1px] cursor-pointer hover:bg-gray-100 hover:border-gray-600`}
							onClick={() => {
								imageRef.current?.click();
							}}>
							<input
								type="file"
								id="review_image"
								name="review_image"
								alt="review_upload"
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
				<div className="flex flex-end">
					<Button
						type={'button'}
						className={`ml-auto mt-2 w-full text-white sm:w-auto ${
							content.length === 0 ? 'bg-gray-400 text-gray-700 ' : 'bg-orange-200 hover:bg-orange-100'
						}`}
						disabled={content.length === 0}
						onClick={uploadImageOnStorage}>
						등 록
					</Button>
				</div>
			</div>
		</Flex>
	);
}
