import { Router } from "express";

import defaultController from "./defaultController";

const defaultRouter = Router(); // eslint-disable-line new-cap

defaultRouter.all("/", defaultController);

export default defaultRouter;
