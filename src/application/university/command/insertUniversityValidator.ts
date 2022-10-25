import TValidationResult from "../../../util/types/validationResult";
import IInsertUniversityRequestDTO from "./insertUniversityRequestDTO";

export default function validateInsertUniversity(
  request: IInsertUniversityRequestDTO
): TValidationResult {
  let isValid = true;
  const errorList: string[] = [];

  if (!request.alpha_two_code || request.alpha_two_code.length !== 2) {
    isValid = false;
    errorList.push("Invalid alpha_two_code");
  }

  if (!request.country) {
    isValid = false;
    errorList.push("Country is a required field");
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
