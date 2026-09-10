import pool from "../config/db"

const createCustomer = async(name: string, email: string) =>{
      const result = await pool.query(
        `
        insert into customer (name,email) values ($1,$2) returning *`,
        [name,email]
        
        
        
        
      )
    return result.rows[0]
  }

  export default createCustomer