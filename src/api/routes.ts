import { Router } from "express";
import statusRouter from "./status/statusRoutes";

const router = Router(); // eslint-disable-line new-cap

router.use("/status", statusRouter);

export default router;
