import { Router } from "express";
import statusRouter from "./status/statusRoutes";
import defaultRouter from "./default/defaultRoutes";

const router = Router(); // eslint-disable-line new-cap

router.use("/status", statusRouter);
router.use("(.*)", defaultRouter);

export default router;
