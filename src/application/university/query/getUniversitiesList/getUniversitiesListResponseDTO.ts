import { PaginateResult } from "mongoose";
import TUniversity from "../../../../data/types/universityType";

interface IGetUniversitiesListResponseDTO extends PaginateResult<TUniversity> {}

export default IGetUniversitiesListResponseDTO;
