import "dotenv/config";
import Fastify from "fastify";
import { MongoService } from "./database/MongoService";
import { errorInterceptor } from "./interceptors/errors.interceptors";
import { RoutesService } from "./modules";

const port = process.env.PORT || "3000";

export async function bootstrap() {
  const app = Fastify({ logger: true });

  app.setErrorHandler(errorInterceptor);

  app.addHook("onRoute", (routeOptions) => {
    app.log.info(
      `Route registered: ${routeOptions.method} ${routeOptions.url}`
    );
  });

  const mongoService = new MongoService(app);

  const routesService = new RoutesService();
  routesService.registerRoutes(app);

  await mongoService.connect();

  app
    .listen({ port: parseInt(port), host: "0.0.0.0" })
    .then(() => app.log.info(`Server running on http://localhost:${port}`))
    .catch((err) => {
      app.log.error(err);
      process.exit(1);
    });
}

bootstrap();
