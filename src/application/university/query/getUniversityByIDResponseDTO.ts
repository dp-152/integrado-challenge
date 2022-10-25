import { Types } from "mongoose";
import TUniversity from "../../../data/types/universityType";

interface IGetUniversityByIDResponseDTO extends TUniversity {
  _id: Types.ObjectId;
}

export default IGetUniversityByIDResponseDTO;
