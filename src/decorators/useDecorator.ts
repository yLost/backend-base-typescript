import { FastifyReply, FastifyRequest } from "fastify";

export function useDecorator(
  callback: (req: FastifyRequest, reply: FastifyReply, ...args: any[]) => any
) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const [req, reply] = args;
      callback(req, reply, ...args);
      return original.apply(this, args);
    };

    return descriptor;
  };
}
