import { Schema, model } from "mongoose";

interface IUniversity {
  "alpha_two_code": string;
  "country": string;
  "domains": string[];
  "name": string;
  "state-province": string;
  "web_pages": string[];
}

const universitySchema = new Schema<IUniversity>({
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

const University = model("university", universitySchema);

export default University;
