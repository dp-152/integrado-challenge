import { isValidObjectId } from "mongoose";
import TValidationResult from "../../../../util/types/validationResult";
import IDeleteUniversityRequestDTO from "./deleteUniversityRequestDTO";

export default function validateDeleteUniversity(
  request: IDeleteUniversityRequestDTO
): TValidationResult {
  let isValid = true;
  const errorList: string[] = [];

  if (!isValidObjectId(request._id)) {
    isValid = false;
    errorList.push("ID is not a valid ObjectID");
  }

  return [isValid, errorList];
}
