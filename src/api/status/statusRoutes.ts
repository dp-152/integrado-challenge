import { Router } from "express";

import statusController from "./statusController";

const statusRouter = Router(); // eslint-disable-line new-cap

statusRouter.get("/", statusController);

export default statusRouter;
