import { z } from 'zod';

export type AuthSchema = z.infer<typeof authSchema>;

export const authSchema = z.object({
	email: z.string().email({ message: '이메일을 입력해 주세요.' }),
});
