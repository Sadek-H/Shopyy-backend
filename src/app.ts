import express from "express";
import router from "./routes/product.route";
import customerRouter from "./routes/customerRoutes";

const app = express();

// // 👇 Ei debug line ta add korun
// app.use((req, res, next) => {
//   console.log("=== DEBUG ===");
//   console.log("Content-Type:", req.headers['content-type']);
//   console.log("Raw Body:", req.body);
//   next();
// });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/products", router);
app.use("/api/customers", customerRouter);

export default app;