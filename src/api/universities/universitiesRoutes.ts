import { Router } from "express";
import getUniversitiesListController from "./getUniversitiesListController";
import getUniversityByIDController from "./getUniversityByIDController";

const universitiesRouter = Router(); // eslint-disable-line new-cap

universitiesRouter.get("/:id", getUniversityByIDController);
universitiesRouter.get("/", getUniversitiesListController);

export default universitiesRouter;

