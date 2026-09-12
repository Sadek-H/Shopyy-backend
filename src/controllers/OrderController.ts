import { Request, Response } from "express";
import {OrderService,getAllOrders} from "../services/OrderService";


const orderControll = async (req: Request, res: Response) => {
  try {
    console.log("=== DEBUG ===");
    console.log("Content-Type:", req.headers['content-type']);
    console.log("Raw Body:", req.body);
    
    const { customer_id, total_amount, status } = req.body;

    const order = await OrderService(
      customer_id,
      total_amount,
      status
    );

    res.status(201).json(order);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllOrdersController = async (req: Request, res: Response) => {

          try{
            const orders = await getAllOrders();
            res.status(200).json(orders);
          }
          catch (error) {
            res.status(500).json({
              message: "Error fetching orders"
            });
          }

}

export { orderControll, getAllOrdersController };