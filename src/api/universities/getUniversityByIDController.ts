import { Request, Response } from "express";
import getUniversityByIDHandler from
  "../../application/university/query/getUniversityByID/getUniversityByIDHandler"; // eslint-disable-line max-len
import TUniversityResponse from "../../data/types/universityResponseType";
import { BaseResponse } from "../../util/extensions/baseResponse";

async function getUniversityByIDController(
  request: Request,
  responseHandler: Response
) {
  const responseData = new BaseResponse<TUniversityResponse>();

  const payload = {
    id: request.params.id,
  };

  const result = await getUniversityByIDHandler(payload);

  responseData.setResponse({
    requestID: request.id,
    message: "ok",
    statusCode: 200,
  }, result);

  return responseData.sendResponse(responseHandler);
}

export default getUniversityByIDController;
