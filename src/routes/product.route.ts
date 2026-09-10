import { Router } from "express";
import { getproducts } from "../controllers/product.controller";



const router = Router();

router.get("/", getproducts);

export default router;