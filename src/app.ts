import Fastify from "fastify";
import { chatRoute } from "./routes/chat.route.js";
import { healthRoute } from "./routes/health.route.js";

const app = Fastify({
  logger: true,
});
await app.register(healthRoute);
await app.register(chatRoute, {
  prefix: "api",
});

try {
  await app.listen({
    port: 26913,
    host: "0.0.0.0",
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
