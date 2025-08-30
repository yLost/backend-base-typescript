import { FastifyInstance } from "fastify";
import { StatusRoutes } from "./status/status.routes";
import { UsersRoutes } from "./users/users.routes";

const routes = [new UsersRoutes(), new StatusRoutes()];

export class RoutesService {
  registerRoutes(app: FastifyInstance) {
    routes.forEach((route) => {
      app.log.info(`Registering routes for ${route.constructor.name}...`);
      route.registerRoutes(app);
      app.log.info(`Routes registered for ${route.constructor.name}`);
    });
  }
}
