import { Router } from "express";
import  { orderControll,getAllOrdersController } from "../controllers/OrderController";


const orderroutes = Router();

orderroutes.post("/", orderControll);
orderroutes.get("/", getAllOrdersController);
export default orderroutes;