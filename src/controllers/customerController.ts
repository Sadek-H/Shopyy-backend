import { Request, Response } from "express";
import {createCustomer,getAllcustomers} from "../services/customerService";

  

  const postCustomer = async (req: Request, res: Response) => {
        try{
             console.log("BODY:", req.body);
            const {name,email} = req.body;
              const customer = await createCustomer(name,email)
              console.log(customer)
             
              res.status(201).json({success: true, data: customer})
        }
        

        catch(err){
           console.error(err);
            res.status(500).json({error: "Error creating customer"})
        }

        }

        const getcustomers = async (req: Request, res: Response) => {
              try{
                
                const result = await getAllcustomers();
                res.status(200).json({success: true, data: result})


              }
              catch(err){
                console.error(err);
                res.status(500).json({error: "Error fetching customers"})
              }


        }


  export { postCustomer, getcustomers }