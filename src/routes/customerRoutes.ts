import { Router } from "express";
import { getcustomers, postCustomer } from "../controllers/customerController";


const customerRouter = Router();

customerRouter.post("/", postCustomer);
customerRouter.get("/", getcustomers);

export default customerRouter;