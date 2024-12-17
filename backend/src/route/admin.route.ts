import { Router } from "express";
import { checkAdmin } from "../controller/admin.controller";

const router = Router();

router.route('/check-admin').post(checkAdmin);

export default router;