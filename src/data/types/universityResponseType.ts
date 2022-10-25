import { Types } from "mongoose";
import TUniversity from "./universityType";

type TUniversityResponse = {
  _id: Types.ObjectId,
} & TUniversity;

export default TUniversityResponse;
