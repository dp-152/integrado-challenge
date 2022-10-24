import HttpError from "./httpError";

export default class UnauthorizedError extends HttpError {
  constructor() {
    super("You do not have access to the requested resource");
    this.statusCode = 401;
  }

  public toJSON() {
    return {
      ...this._toJSON(),
    };
  }
}
