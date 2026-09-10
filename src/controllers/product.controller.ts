import { Request, Response } from "express";
import getAllproducts from "../services/product.service";


export const getproducts = async (
  req: Request,
  res: Response
) => {
  try {
    const products = await getAllproducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};