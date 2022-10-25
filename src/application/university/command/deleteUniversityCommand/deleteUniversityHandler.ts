import University from "../../../../data/model/universityModel";
import BadRequestError from "../../../../util/errors/badRequestError";
import ResourceNotFoundError from
  "../../../../util/errors/resourceNotFoundError";
import IDeleteUniversityRequestDTO from "./deleteUniversityRequestDTO";
import validateDeleteUniversity from "./deleteUniversityValidator";

export default async function deleteUniversityHandler(
  request: IDeleteUniversityRequestDTO
) {
  const [isValid, errorList] = validateDeleteUniversity(request);

  if (!isValid) {
    throw new BadRequestError(errorList);
  }

  const result = await University.deleteOne({ _id: request._id });

  const isDeleted = result.deletedCount > 0;

  if (!isDeleted) {
    throw new ResourceNotFoundError(request._id.toString());
  }

  return { deleted: isDeleted };
}
