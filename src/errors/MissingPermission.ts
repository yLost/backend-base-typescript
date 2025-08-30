import { BaseError } from "./BaseError";

export class MissingPermission extends BaseError {
  constructor(message?: string) {
    super(message);

    this.code = 403;
    this.name = "Missing Permission";
  }
}
