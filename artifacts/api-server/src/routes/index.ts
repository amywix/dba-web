import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import enquiryRouter from "./enquiry";
import onboardingRouter from "./onboarding";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(enquiryRouter);
router.use(onboardingRouter);

export default router;
