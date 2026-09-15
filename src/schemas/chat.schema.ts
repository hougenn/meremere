import { z } from "zod";

export const ChatBodySchema = z.object({
  model: z.string(),
  message: z.string(),
});


export type ChatBody = z.infer<typeof ChatBodySchema>
export type ChatInput = z.infer<typeof ChatBodySchema>