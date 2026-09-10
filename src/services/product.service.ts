import pool from "../config/db";


const getAllproducts = async()=>{
    const result = await pool.query(`
         select 
             product.id,
             product.name
             
            from product

            inner join categories on product.category_id = categories.id
            
        
        
        `)
    return result.rows;
}

export default getAllproducts;