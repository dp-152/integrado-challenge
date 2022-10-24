import { timingSafeEqual } from "crypto";
import { NextFunction, Request, Response } from "express";
import { APP_API_KEY, APP_API_KEY_HEADER } from "../config/settings";
import EUnauthorizedReason from "../util/Enums/EUnauthorizedReason";
import UnauthorizedError from "../util/errors/unauthorizedError";

export default function isValidApiKey(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authorization = request.get(APP_API_KEY_HEADER);
  if (!authorization) {
    throw new UnauthorizedError(EUnauthorizedReason.MissingHeader);
  }

  const assertion = timingSafeEqual(
    Buffer.from(authorization),
    Buffer.from(APP_API_KEY)
  );

  if (!assertion) {
    throw new UnauthorizedError(EUnauthorizedReason.InvalidApiKey);
  }

  next();
}
