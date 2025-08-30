import { Validate } from "@/decorators/validate.decorator";
import { CreateUserSchema, TCreateUserSchema } from "@/schemes/UserScheme";
import { FastifyReply, FastifyRequest } from "fastify";
import { UsersService } from "./users.service";

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Validate(CreateUserSchema)
  async createUser(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as TCreateUserSchema;

    return this.usersService.createUser(data);
  }

  async getUserById(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.params as { userId: string };

    return this.usersService.getUserById({ userId });
  }
}
