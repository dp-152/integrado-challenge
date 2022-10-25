import University from "../../../../data/model/universityModel";
import TUniversity from "../../../../data/types/universityType";
import BadRequestError from "../../../../util/errors/badRequestError";
import ResourceNotFoundError from
  "../../../../util/errors/resourceNotFoundError";
import IGetUniversitiesListRequestDTO from "./getUniversitiesListRequestDTO";
import validateGetUniversitiesList from "./getUniversitiesListValidator";

export default async function getUnivrsitiesListHandler(
  request: IGetUniversitiesListRequestDTO
) {
  const [isValid, errorList] = validateGetUniversitiesList(request);

  if (!isValid) {
    throw new BadRequestError(errorList);
  }

  const pageNumber = request.pageNumber || 1;
  const pageSize = 20;

  const result = await University.paginate(
    request.country ? { country: new RegExp(request.country, "i") } : {},
    { page: pageNumber, limit: pageSize }
  );

  if (result.totalDocs === 0) {
    throw new ResourceNotFoundError(request.country || "*");
  }

  if (result.docs.length === 0) {
    throw new ResourceNotFoundError(pageNumber.toString());
  }

  return result;
}
