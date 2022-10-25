import University from "../../../../data/model/universityModel";
import BadRequestError from "../../../../util/errors/badRequestError";
import ResourceNotFoundError from
  "../../../../util/errors/resourceNotFoundError";
import IUpdateUniversityRequestDTO from "./updateUniversityRequestDTO";
import validateUpdateUniversity from "./updateUniversityValidator";

export default async function updateUniversityHandler(
  request: IUpdateUniversityRequestDTO
) {
  const [isValid, errorList] = validateUpdateUniversity(request);

  if (!isValid) {
    throw new BadRequestError(errorList);
  }

  const match = await University.findById(request._id);

  if (!match) {
    throw new ResourceNotFoundError(request._id.toString());
  }

  const update = {
    web_pages: request.web_pages,
    name: request.name,
    domains: request.domains,
  };

  Object.assign(match, update);

  const result = await match.save();

  return result;
}
