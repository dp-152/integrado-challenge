import { Router } from "express";
import deleteUniversityController from "./deleteUniversityController";
import getUniversitiesListController from "./getUniversitiesListController";
import getUniversityByIDController from "./getUniversityByIDController";
import insertUniversityController from "./insertUniversityController";
import updateUniversityController from "./updateUniversityController";

const universitiesRouter = Router(); // eslint-disable-line new-cap

universitiesRouter.get("/:id", getUniversityByIDController);
universitiesRouter.get("/", getUniversitiesListController);
universitiesRouter.post("/", insertUniversityController);
universitiesRouter.put("/:id", updateUniversityController);
universitiesRouter.delete("/:id", deleteUniversityController);

export default universitiesRouter;

