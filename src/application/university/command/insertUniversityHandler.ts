import University from "../../../data/model/universityModel";
import BadRequestError from "../../../util/errors/badRequestError";
import IInsertUniversityRequestDTO from "./insertUniversityRequestDTO";
import validateInsertUniversity from "./insertUniversityValidator";

export default async function insertUniversityHandler(
  request: IInsertUniversityRequestDTO
) {
  const [isValid, errorList] = validateInsertUniversity(request);

  if (!isValid) {
    throw new BadRequestError(errorList);
  }

  const result = await University.create(request);

  return {
    _id: result._id,
  };
}
