import { Request } from "express";
import ResourceNotFoundError from "../../util/errors/resourceNotFoundError";

async function defaultController(
  request: Request,
) {
  throw new ResourceNotFoundError(request.path);
}

export default defaultController;
