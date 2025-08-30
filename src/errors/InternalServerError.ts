import { BaseError } from "./BaseError";

export class InternalServerError extends BaseError {
  constructor(message?: string) {
    super(message);

    this.code = 500;
    this.name = "InternalServerError";
  }
}
