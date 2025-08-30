import { FastifyInstance } from "fastify";
import { StatusController } from "./status.controller";
import { StatusService } from "./status.service";

export class StatusRoutes {
  registerRoutes(app: FastifyInstance) {
    const statusService = new StatusService();
    const statusController = new StatusController(statusService);

    app.get("/status", statusController.getStatus.bind(statusController));
  }
}
