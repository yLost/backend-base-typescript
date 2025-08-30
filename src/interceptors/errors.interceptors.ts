import { BadRequest } from "@/errors/BadRequest";
import { MissingPermission } from "@/errors/MissingPermission";
import { Unauthorized } from "@/errors/Unauthorized";
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

function buildError(error: FastifyError) {
  console.log(typeof error.message);

  let message = error.message;

  try {
    message = JSON.parse(message);
  } catch (error) {}

  return {
    error: error.name || "Internal Server Error",
    status: parseInt(error.code) || 500,
    message: message || "Internal Server Error",
  };
}

export const errorInterceptor = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const buildedError = buildError(error);

  if (
    error instanceof BadRequest ||
    error instanceof Unauthorized ||
    error instanceof MissingPermission
  ) {
    return reply.status(buildedError.status).send(buildedError);
  }

  // Handle the error
  console.error("Error intercepted:");
  console.error(error);

  // Send a custom error response
  reply.status(500).send({
    error: "Internal Server Error",
    status: parseInt(error.code) || 500,
    message: "Internal Server Error",
  });
};
