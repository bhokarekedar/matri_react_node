import { Router } from "express";
import usersRouter from "./users.mjs";
import generalInfoRouterRouter from "./generalInfo.mjs";

const router = Router();

router.use(usersRouter);
router.use(generalInfoRouterRouter);

export default router;