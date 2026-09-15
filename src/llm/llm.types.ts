export type LLMRequest = {
  model: string;
  message: LLMMessage[];
};

export type LLMMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type LLMResponse = {
  content: string;
}

