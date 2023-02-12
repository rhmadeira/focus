import * as Zod from "zod";

export const schemaNewCollaborator = Zod.object({
  name: Zod.string(),
  email: Zod.string().email(),
  password: Zod.string().min(6).max(50),
  permission: Zod.string(),
});
