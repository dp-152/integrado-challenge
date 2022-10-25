import { Router } from "express";
import isValidApiKey from "../../middlewares/auth";
import deleteUniversityController from "./deleteUniversityController";
import getUniversitiesListController from "./getUniversitiesListController";
import getUniversityByIDController from "./getUniversityByIDController";
import insertUniversityController from "./insertUniversityController";
import updateUniversityController from "./updateUniversityController";

const universitiesRouter = Router(); // eslint-disable-line new-cap

universitiesRouter.get("/:id", getUniversityByIDController);
universitiesRouter.get("/", getUniversitiesListController);
universitiesRouter.post("/", isValidApiKey, insertUniversityController);
universitiesRouter.put("/:id", isValidApiKey, updateUniversityController);
universitiesRouter.delete("/:id", isValidApiKey, deleteUniversityController);

export default universitiesRouter;

