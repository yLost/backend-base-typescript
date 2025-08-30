import { Auth } from "@/decorators/auth.decorator";
import { FastifyReply, FastifyRequest } from "fastify";
import { StatusService } from "./status.service";

export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Auth()
  async getStatus(request: FastifyRequest, reply: FastifyReply) {
    const { status } = await this.statusService.getStatus();

    reply.status(200).send({ status });
  }

  async getHealth(request: FastifyRequest, reply: FastifyReply) {
    const health = await this.statusService.getHealth();

    reply.status(200).send(health);
  }
}
