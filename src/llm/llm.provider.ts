import type { LLMRequest, LLMResponse } from "./llm.types.js";

export interface LLMProvider {
  generate(req: LLMRequest): Promise<LLMResponse>;
}
