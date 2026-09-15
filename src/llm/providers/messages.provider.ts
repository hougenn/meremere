import type { LLMProvider } from "../llm.provider.js";
import { LLMRequest, LLMResponse } from "../llm.types.js";

export class MessagesProvider implements LLMProvider {
  async generate(req: LLMRequest): Promise<LLMResponse> {
    return {
      content: "",
    };
  }
}
