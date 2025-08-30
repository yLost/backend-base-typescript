import { FastifyInstance } from "fastify";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

export class UsersRoutes {
  registerRoutes(app: FastifyInstance) {
    const usersService = new UsersService();
    const usersController = new UsersController(usersService);

    app.post("/users", usersController.createUser.bind(usersController));
    app.get("/users/:userId", usersController.getUserById.bind(usersController));
  }
}
