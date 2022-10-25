import { NextFunction, Request, Response } from "express";
import HttpError from "../util/errors/httpError";
import { BaseResponse } from "../util/extensions/baseResponse";

export default function errorHandler(
  error: HttpError,
  expressRequest: Request,
  expressResponse: Response,
  next: NextFunction
) {
  if (expressResponse.headersSent || !(error instanceof HttpError)) {
    next(error);
    return;
  }

  const response = new BaseResponse<typeof error>();

  response.setResponse({
    requestID: expressRequest.id,
    statusCode: error.statusCode,
    message: error.message,
    errorDetails: error.data,
    error,
  });

  response.sendResponse(expressResponse);
}
