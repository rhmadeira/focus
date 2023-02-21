import * as Zod from "zod";

export const schemaNewCollaborator = Zod.object({
  name: Zod.string(),
  email: Zod.string().email({ message: "Email inválido" }),
  password: Zod.string().min(4, { message: "Deve conter no min 4 dígitos" }),
  permission: Zod.number(),
});

export type NewCollaboratorData = Zod.infer<typeof schemaNewCollaborator>;
