import z from "zod";

export const zodUser = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  profileImg: z.instanceof(File).optional(),
});
