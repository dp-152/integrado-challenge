import { Request, Response } from "express";
import getUniversitiesListHandler from
  "../../application/university/query/getUniversitiesList/getUniversitiesListHandler"; // eslint-disable-line max-len
import IGetUniversitiesListRequestDTO from
  "../../application/university/query/getUniversitiesList/getUniversitiesListRequestDTO"; // eslint-disable-line max-len
import TUniversityResponse from "../../data/types/universityResponseType";
import { BaseResponsePaged } from "../../util/extensions/baseResponse";

async function getUniversitiesListController(
  request: Request<unknown, unknown, unknown, IGetUniversitiesListRequestDTO>,
  responseHandler: Response
) {
  const responseData = new BaseResponsePaged<TUniversityResponse>();

  const payload = {
    pageNumber: request.query.pageNumber,
    country: request.query.country,
  };

  const result = await getUniversitiesListHandler(payload);

  responseData.setResponse({
    requestID: request.id,
    message: "ok",
    statusCode: 200,
  }, result);

  return responseData.sendResponse(responseHandler);
}

export default getUniversitiesListController;
