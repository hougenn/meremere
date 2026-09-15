import { getLLMProvider } from "../llm/provider.factory.js";
import type { ChatInput } from "../schemas/chat.schema.js";

export type ChatResult = {
  model: string;
  content: string;
};

export async function chat(input: ChatInput): Promise<ChatResult> {
  let llm = getLLMProvider();
  const result = await llm.generate({
    model: input.model,
    message: [
      {
        role: "user",
        content: input.message,
      },
    ],
  });
  return {
    model: input.model,
    content: result.content,
  };
}
