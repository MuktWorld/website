import { Router } from "express";
import { uplodePortfolio, deletePortfolio, getPortfolio } from "../controller/portfolio.controller";
import { upload } from "../middleware/multer.middleware";

const router = Router();

router.route('/upload-portfolio').post(upload.single('fileUrl'), uplodePortfolio);
router.route('/delete-portfolio/:id').delete(deletePortfolio);
router.route('/get-portfolio').get(getPortfolio);

export default router;