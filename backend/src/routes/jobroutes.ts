import { Router } from "express";
import { handleCompanyLogin } from "../controllers/jobcontrollers";

const router = Router();

router.post("/company-login", handleCompanyLogin);




export default router;