export class BaseError extends Error {
  public code: number;

  constructor(message?: string) {
    super(message);
    this.code = 500;
  }
}
