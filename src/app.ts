import "dotenv/config";
import Fastify from "fastify";
import { MongoService } from "./database/MongoService";
import { errorInterceptor } from "./interceptors/errors.interceptors";
import { RoutesService } from "./modules";

const port = process.env.PORT || "3000";

export async function bootstrap() {
  const startedAt = Date.now();
  const app = Fastify({ logger: true });

  app.setErrorHandler(errorInterceptor);

  app.addHook("onRoute", (routeOptions) => {
    if (routeOptions.method != "HEAD") {
      app.log.info(
        `Route registered: ${routeOptions.method} ${routeOptions.url}`
      );
    }
  });
  app.log.info(`Initial setup done after ${Date.now() - startedAt}ms`);

  const mongoService = new MongoService(app);

  const routesService = new RoutesService();
  routesService.registerRoutes(app);
  app.log.info(`Routes registered after ${Date.now() - startedAt}ms`);

  await mongoService.connect();
  app.log.info(`MongoDB connected after ${Date.now() - startedAt}ms`);

  app
    .listen({ port: parseInt(port), host: "0.0.0.0" })
    .then(() => {
      app.log.info(`Server running on http://localhost:${port}`);
      app.log.info(`Startup time: ${Date.now() - startedAt}ms`);
    })
    .catch((err) => {
      app.log.error(err);
      process.exit(1);
    });
}

bootstrap();
