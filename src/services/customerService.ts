import pool from "../config/db"

const createCustomer = async(name: string, email: string) =>{
      const result = await pool.query(
        `
        insert into customer (name,email) values ($1,$2) returning *`,
        [name,email]
        
        
        
        
      )
    return result.rows[0]
  }

  const getAllcustomers = async() =>{
     const result = await pool.query(
      `
      select customer.id, customer.name, customer.email from customer
      
      
      `
     )
     return result.rows
  }

  export { createCustomer, getAllcustomers }