import z from "zod";

export const zodRegister = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  profileImg: z.instanceof(File).optional(),
});
export const zodLogin = z.object({
  email: z.string(),
  password: z.string().min(8),
});
