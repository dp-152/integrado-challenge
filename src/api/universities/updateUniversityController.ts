import { Request, Response } from "express";
import updateUniversityHandler from
  "../../application/university/command/updateUniversityCommand/updateUniversityHandler"; // eslint-disable-line max-len
import TUniversityResponse from "../../data/types/universityResponseType";
import { BaseResponse } from "../../util/extensions/baseResponse";

export default async function updateUniversityController(
  request: Request,
  responseHandler: Response
) {
  const responseData = new BaseResponse<TUniversityResponse>();

  const payload = {
    _id: request.params.id,
    ...request.body,
  };

  const result = await updateUniversityHandler(payload);

  responseData.setResponse({
    requestID: request.id,
    message: "updated",
    statusCode: 200,
  }, result);

  return responseData.sendResponse(responseHandler);
}
