import { BadRequest } from "@/errors/BadRequest";
import { z } from "zod";
import { useDecorator } from "./useDecorator";

export function Validate(schema: z.ZodType) {
  return useDecorator((req, reply) => {
    try {
      req.body = schema.parse(req.body);
    } catch (err: any) {
      throw new BadRequest(err.message);
    }
  });
}
