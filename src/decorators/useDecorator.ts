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

    descriptor.value = async function (...args: any[]) {
      const [req, reply] = args;

      const result = await callback(req, reply, ...args);
      if (result !== undefined) {
        return result;
      }

      return original.apply(this, args);
    };
    return descriptor;
  };
}
