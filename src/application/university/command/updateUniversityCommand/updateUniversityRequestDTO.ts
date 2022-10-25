import { Types } from "mongoose";
import TUniversity from "../../../../data/types/universityType";

interface IUpdateUniversityRequestDTO
  extends Omit<TUniversity, "alpha_two_code" | "country" | "state-province"> {
  _id: Types.ObjectId;
}

export default IUpdateUniversityRequestDTO;
