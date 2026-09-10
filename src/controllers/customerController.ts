import { Request, Response } from "express";
import createCustomer from "../services/customerService";

  

  const postCustomer = async (req: Request, res: Response) => {
        try{

            const {name,email} = req.body;
              const customer = await createCustomer(name,email)
             
              res.status(201).json({success: true, data: customer})
        }
        

        catch(err){
            res.status(500).json({error: "Error creating customer"})
        }

        }


  export default postCustomer