import { Router } from "express";
import postCustomer from "../controllers/customerController";


const customerRouter = Router();

customerRouter.post("/", postCustomer); 

export default customerRouter;