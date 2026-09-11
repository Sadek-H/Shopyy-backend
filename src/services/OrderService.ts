import pool from "../config/db";

const OrderService = async (
  customer_id: number,
  total_amount: number,
  status: string
) => {
  const order = await pool.query(
    `INSERT INTO orders (customer_id, total_amount, status)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [customer_id, total_amount, status]   // ← EITA ADD KORUN
  );

  return order.rows[0];
};

export default OrderService;