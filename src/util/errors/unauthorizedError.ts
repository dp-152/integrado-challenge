import EUnauthorizedReason from "../Enums/EUnauthorizedReason";
import HttpError from "./httpError";

export default class UnauthorizedError extends HttpError {
  constructor(reason: EUnauthorizedReason) {
    super("You do not have access to the requested resource");
    this.statusCode = 401;
    this.data = reason;
  }

  public toJSON() {
    return {
      ...this._toJSON(),
    };
  }
}
