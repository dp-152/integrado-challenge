import { Request, Response } from "express";
import { BaseResponse } from "../../util/extensions/baseResponse";

async function defaultController(request: Request, responseHandler: Response) {
  const response = new BaseResponse();

  response.setResponse({
    statusCode: 404,
    message: "Requested resource not found",
    errorDetails: `The resource at ${request.path} does not exist`,
    requestID: request.id,
  });

  return response.sendResponse(responseHandler);
}

export default defaultController;
