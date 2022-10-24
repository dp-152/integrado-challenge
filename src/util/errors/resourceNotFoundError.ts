import HttpError from "./httpError";

export default class ResourceNotFoundError extends HttpError {
  constructor(path: string = "?") {
    super("Requested resource could not be found");
    this.statusCode = 404;
    this.data = `The resource at ${path} does not exist`;
  }

  public toJSON() {
    return {
      ...this._toJSON(),
    };
  }
}
