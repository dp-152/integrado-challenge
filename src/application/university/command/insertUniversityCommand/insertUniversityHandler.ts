import University from "../../../../data/model/universityModel";
import BadRequestError from "../../../../util/errors/badRequestError";
import IInsertUniversityRequestDTO from "./insertUniversityRequestDTO";
import validateInsertUniversity from "./insertUniversityValidator";

export default async function insertUniversityHandler(
  request: IInsertUniversityRequestDTO,
) {
  const [isValid, errorList] = validateInsertUniversity(request);

  if (!isValid) {
    throw new BadRequestError(errorList);
  }

  const match = await University.findOne({
    "alpha_two_code": request.alpha_two_code,
    "state-province": request["state-province"],
    "name": request.name,
  });

  if (match) {
    throw new BadRequestError(["An identical entry already exists."]);
  }

  const result = await University.create(request);

  return {
    _id: result._id,
  };
}
