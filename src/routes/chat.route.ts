import type { FastifyInstance } from "fastify";
import { ChatBodySchema } from "../schemas/chat.schema.js";
import { chat } from "../services/chat.service.js";

export function chatRoute(app: FastifyInstance) {
  app.post("/chat", async (request, reply) => {
    const result = ChatBodySchema.safeParse(request.body);
    if (!result.success) {
      return reply.code(400).send({
        error: "Invalid request body",
        details: result.error.issues,
      });
    }

    return await chat(result.data);
  });
}
