import { isValidObjectId } from "mongoose";
import TValidationResult from "../../../../util/types/validationResult";
import IUpdateUniversityRequestDTO from "./updateUniversityRequestDTO";

export default function validateUpdateUniversity(
  request: IUpdateUniversityRequestDTO
): TValidationResult {
  let isValid = true;
  const errorList: string[] = [];

  if (!request._id) {
    isValid = false;
    errorList.push("ID is a required field");
  } else if (!isValidObjectId(request._id)) {
    isValid = false;
    errorList.push("ID is not a valid ObjectID");
  }

  if (!request.name) {
    isValid = false;
    errorList.push("Name is a required field");
  }

  if (
    request.domains &&
    (!Array.isArray(request.domains) ||
      !!request.domains.find(dom => typeof dom !== "string"))
  ) {
    isValid = false;
    errorList.push("Invalid list of domains");
  }

  return [isValid, errorList];
}
