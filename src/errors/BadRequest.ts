import { BaseError } from "./BaseError";

export class BadRequest extends BaseError {
  constructor(message?: string) {
    super(message);

    this.code = 400;
    this.name = "BadRequest";
  }
}
