import TValidationResult from "../../../../util/types/validationResult";
import IGetUniversitiesListRequestDTO from "./getUniversitiesListRequestDTO";

export default function validateGetUniversitiesList(
  request: IGetUniversitiesListRequestDTO
): TValidationResult {
  let isValid = true;
  const errorList: string[] = [];

  if (!!request.pageNumber && typeof request.pageNumber !== "number") {
    isValid = false;
    errorList.push(`Requested page number ${request.pageNumber} is not valid`);
  }

  return [isValid, errorList];
}
