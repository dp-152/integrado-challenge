import { isValidObjectId } from "mongoose";
import TValidationResult from "../../../../util/types/validationResult";
import IGetUniversityByIDRequestDTO from "./getUniversityByIDRequestDTO";

export default function validateGetUniversityByID(
  request: IGetUniversityByIDRequestDTO
): TValidationResult {
  let isValid = true;
  const errorList: string[] = [];

  if (!isValidObjectId(request.id)) {
    isValid = false;
    errorList.push("ID is not a valid ObjectId");
  }

  return [isValid, errorList];
}
