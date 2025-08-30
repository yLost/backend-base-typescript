import { z } from "zod";

export type TCreateUserSchema = z.infer<typeof CreateUserSchema>;
export const CreateUserSchema = z.object({
  age: z.number().min(0, "Idade deve ser um número positivo"),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});
