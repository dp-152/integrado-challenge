import { Request, Response } from "express";
import insertUniversityHandler from
  "../../application/university/command/insertUniversityHandler";
import IInsertUniversityResponseDTO from
  "../../application/university/command/insertUniversityResponseDTO";
import { BaseResponse } from "../../util/extensions/baseResponse";

export default async function insertUniversityController(
  request: Request,
  responseHandler: Response
) {
  const responseData = new BaseResponse<IInsertUniversityResponseDTO>();

  const payload = request.body;

  const result = await insertUniversityHandler(payload);

  responseData.setResponse({
    requestID: request.id,
    message: "created",
    statusCode: 201,
  }, result);

  return responseData.sendResponse(responseHandler);
}
