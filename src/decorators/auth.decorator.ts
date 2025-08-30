import { Unauthorized } from "@/errors/Unauthorized";
import { useDecorator } from "./useDecorator";

export function Auth() {
  return useDecorator((request, reply, args) => {
    console.log(request.headers);

    if (!request.headers.authorization) {
      throw new Unauthorized("Missing authorization header");
    }

    if (request.headers.authorization != "1234") {
      throw new Unauthorized("Invalid authorization header");
    }
  });
}
