import { Schema, model, PaginateModel, Document } from "mongoose";
import paginate from "mongoose-paginate-v2";
import TUniversity from "../types/universityType";

const universitySchema = new Schema<TUniversity>({
  "alpha_two_code": { type: String, maxLength: 2 },
  "country": String,
  "domains": [String],
  "name": String,
  "state-province": { type: String, required: false },
  "web_pages": [String],
});

universitySchema.index(
  { "alpha-two-code": 1, "state-province": 1, "name": 1 },
  { unique: true }
);

universitySchema.plugin(paginate);

interface IUniversityDocument extends Document, TUniversity {}

const University = model<
  IUniversityDocument,
  PaginateModel<IUniversityDocument>
>("universities", universitySchema);

export default University;
