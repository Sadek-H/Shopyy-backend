import { Router } from "express";
import orderControll from "../controllers/OrderController";


const orderroutes = Router();

orderroutes.post("/", orderControll);

export default orderroutes;