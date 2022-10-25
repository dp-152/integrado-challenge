import { Request, Response } from "express";
import getUniversityByIDHandler from
  "../../application/university/query/getUniversityByIDHandler";
import IGetUniversityByIDResponseDTO from
  "../../application/university/query/getUniversityByIDResponseDTO";
import { BaseResponse } from "../../util/extensions/baseResponse";

async function getUniversityByIDController(
  request: Request,
  responseHandler: Response
) {
  const responseData = new BaseResponse<IGetUniversityByIDResponseDTO>();

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
