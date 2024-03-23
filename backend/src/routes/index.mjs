import { Router } from "express";
import usersRouter from "./users.mjs";
import generalInfoRouterRouter from "./generalInfo.mjs";
import registrationRouterRouter from "./registration.mjs";

const router = Router();

router.use(usersRouter);
router.use(generalInfoRouterRouter);
router.use(registrationRouterRouter);

export default router;