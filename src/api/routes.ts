import { Router } from "express";
import statusRouter from "./status/statusRoutes";
import defaultRouter from "./default/defaultRoutes";
import universitiesRouter from "./universities/universitiesRoutes";

const router = Router(); // eslint-disable-line new-cap

router.use("/university", universitiesRouter);
router.use("/status", statusRouter);
router.use("(.*)", defaultRouter);

export default router;
