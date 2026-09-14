import type { ChatInput } from "../schemas/chat.schema.js";

export type ChatResult = {
  provider: "openai" | "anthropic";
  model: string;
  content: string;
};

export async function chat(input: ChatInput): Promise<ChatResult> {
  return {
    provider: input.provider,
    model: input.model,
    content: `input:  ${input.message}`,
  };
}
