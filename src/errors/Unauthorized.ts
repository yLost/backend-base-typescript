import { BaseError } from "./BaseError";

export class Unauthorized extends BaseError {
  constructor(message?: string) {
    super(message);

    this.code = 401;
    this.name = "Unauthorized";
  }
}
