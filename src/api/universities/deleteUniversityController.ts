import { Request, Response } from "express";
import deleteUniversityHandler from
  "../../application/university/command/deleteUniversityCommand/deleteUniversityHandler"; // eslint-disable-line max-len
import IDeleteUniversityResponseDTO from
  "../../application/university/command/deleteUniversityCommand/deleteUniversityResponseDTO"; // eslint-disable-line max-len
import { BaseResponse } from "../../util/extensions/baseResponse";

export default async function deleteUniversityController(
  request: Request,
  responseHandler: Response
) {
  const responseData = new BaseResponse<IDeleteUniversityResponseDTO>();

  const payload = {
    _id: request.params.id,
    ...request.body,
  };

  const result = await deleteUniversityHandler(payload);

  responseData.setResponse({
    requestID: request.id,
    message: "deleted",
    statusCode: 200,
  }, result);

  return responseData.sendResponse(responseHandler);
}
