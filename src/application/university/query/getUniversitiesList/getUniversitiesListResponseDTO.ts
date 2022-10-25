import { PaginateResult } from "mongoose";
import TUniversityResponse from "../../../../data/types/universityResponseType";

interface IGetUniversitiesListResponseDTO
  extends PaginateResult<TUniversityResponse> {}

export default IGetUniversitiesListResponseDTO;
