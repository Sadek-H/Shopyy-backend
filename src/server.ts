
import app from "./app";
import pool from "./config/db";

const PORT = 5000;
pool.query("SELECT NOW()")
    .then(()=>{
        console.log("Database connected successfully");
  
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
  
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
