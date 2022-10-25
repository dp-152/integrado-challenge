import { ObjectId } from "mongodb";
import University from "../../../../data/model/universityModel";
import BadRequestError from "../../../../util/errors/badRequestError";
import ResourceNotFoundError from
  "../../../../util/errors/resourceNotFoundError";
import IGetUniversityByIDRequestDTO from "./getUniversityByIDRequestDTO";
import validateGetUniversityByID from "./getUniversityByIDValidator";

export default async function getUniversityByIDHandler(
  request: IGetUniversityByIDRequestDTO
) {
  const [isValid, errorList] = validateGetUniversityByID(request);
  if (!isValid) {
    throw new BadRequestError(errorList);
  }

  const result = await University.findById(new ObjectId(request.id));

  if (!result) {
    throw new ResourceNotFoundError(request.id);
  }

  return result;
}
