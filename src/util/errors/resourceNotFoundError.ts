import HttpError from "./httpError";

export default class ResourceNotFoundError extends HttpError {
  constructor() {
    super("Requested resource could not be found");
    this.statusCode = 404;
  }

  public toJSON() {
    return {
      ...this._toJSON(),
    };
  }
}
