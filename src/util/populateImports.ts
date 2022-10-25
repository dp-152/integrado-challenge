import axios from "axios";
import { promises as fs } from "fs";
import path from "path";
import TUniversity from "../data/types/universityType";

export default async function populateImports() {
  try {
    await fs.access(path.join(__dirname, "../data/import/universities"));
    return;
  } catch {
    await fs.mkdir(path.join(__dirname, "../data/import/universities"), {
      recursive: true,
    });

    const countries = [
      "argentina",
      "brazil",
      "chile",
      "colombia",
      "paraguay",
      "peru",
      "suriname",
      "uruguay",
    ];

    await Promise.all(
      countries.map(async country => {
        const { data: response } = await axios.get<TUniversity[]>(
          "http://universities.hipolabs.com/search",
          { params: { country } }
        );

        await fs.writeFile(
          path.join(
            __dirname,
            `../data/import/universities/universities-${country}.json`
          ),
          JSON.stringify(response)
        );
      })
    );
  }
}
