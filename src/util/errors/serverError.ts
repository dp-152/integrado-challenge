import HttpError from "./httpError";

export default class ServerError extends HttpError {
  constructor() {
    super(
      "The server encountered an error while attempting to serve this request"
    );
    this.statusCode = 500;
  }

  public toJSON() {
    return {
      ...this._toJSON(),
    };
  }
}
