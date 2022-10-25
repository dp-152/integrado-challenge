import { Router } from "express";
import getUniversitiesListController from "./getUniversitiesListController";
import getUniversityByIDController from "./getUniversityByIDController";
import insertUniversityController from "./insertUniversityController";
import updateUniversityController from "./updateUniversityController";

const universitiesRouter = Router(); // eslint-disable-line new-cap

universitiesRouter.get("/:id", getUniversityByIDController);
universitiesRouter.get("/", getUniversitiesListController);
universitiesRouter.post("/", insertUniversityController);
universitiesRouter.put("/:id", updateUniversityController);

export default universitiesRouter;

