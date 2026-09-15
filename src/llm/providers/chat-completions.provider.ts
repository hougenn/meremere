import OpenAI from "openai";
import type { LLMProvider } from "../llm.provider.js";
import { LLMRequest, LLMResponse } from "../llm.types.js";

export class ChatCompletionsProvider implements LLMProvider {
  private client: OpenAI;

  constructor(api: string, baseurl: string) {
    this.client = new OpenAI({
      apiKey: api,
      baseURL: baseurl,
    });
  }

  async generate(req: LLMRequest): Promise<LLMResponse> {
    const response = await this.client.chat.completions.create({
      messages: req.message,
      model: req.model,
    });

    const content = response.choices[0]?.message.content;
    if (content == null) {
      throw new Error("LLM did not return any content");
    }

    return {
      content: content,
    };
  }
}
