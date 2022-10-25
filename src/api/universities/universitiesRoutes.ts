import { Router } from "express";
import getUniversityByIDController from "./getUniversityByIDController";

const universitiesRouter = Router(); // eslint-disable-line new-cap

universitiesRouter.get("/:id", getUniversityByIDController);

export default universitiesRouter;

