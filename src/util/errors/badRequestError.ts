import HttpError from "./httpError";

export default class BadRequestError extends HttpError {
  constructor(errorList: string[]) {
    super("One or more fields sent in the request has failed validation");
    this.statusCode = 400;
    this.data = {
      errors: errorList,
    };
  }

  public toJSON() {
    return {
      ...this._toJSON(),
    };
  }
}
