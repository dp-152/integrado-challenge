import { randomUUID } from "crypto";
import { NextFunction, Request, Response } from "express";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      id: string;
    }
  }
}

export default function requestID(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const id = randomUUID();
  response.set("X-Request-Id", id);
  request.id = id;
  next();
}
