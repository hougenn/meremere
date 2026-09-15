import type { LLMProvider } from "./llm.provider.js";
import { ChatCompletionsProvider } from "./providers/chat-completions.provider.js";
import { MessagesProvider } from "./providers/messages.provider.js";
import { ResponseProvider } from "./providers/responses.provider.js";
import "dotenv/config";

export function getLLMProvider(): LLMProvider {
  let key = process.env.LLM_API_KEY;
  let type = process.env.LLM_API_TYPE;
  let url = process.env.LLM_BASE_URL;
  if (!key || !url) {
    throw new Error("llm key or url not config.");
  }
  switch (type) {
    case "chat-completions":
      return new ChatCompletionsProvider(key, url);
    case "messages":
      return new MessagesProvider();
    case "responses":
      return new ResponseProvider();
    default:
      throw new Error("not sopport api type.");
  }
}
