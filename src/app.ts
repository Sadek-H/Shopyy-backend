import express from "express";
import router from "./routes/product.route";
import customerRouter from "./routes/customerRoutes";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/products", router);
app.use("/api/customers", customerRouter);
export default app;
