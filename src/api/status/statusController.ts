import { Request, Response } from "express";
import { BaseResponse } from "../../util/extensions/baseResponse";

async function statusController(request: Request, responseHandler: Response) {
  const responseData = new BaseResponse();

  responseData.setResponse({
    requestID: request.id,
    message: "ok",
    statusCode: 200,
  });

  return responseData.sendResponse(responseHandler);
}

export default statusController;
