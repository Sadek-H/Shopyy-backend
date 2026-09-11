import express from "express";

import router from "./routes/product.route";
import customerRouter from "./routes/customerRoutes";
import orderroutes from "./routes/Orderroutest";

const app = express();

// ===============================
// Middleware
// ===============================
app.use(express.json({ type: '*/*' }));

app.use(express.urlencoded({ extended: true }));

console.log("🔥 app.ts is running");

// ===============================
// Test JSON body
// ===============================
app.post("/test", (req, res) => {
  console.log("========== TEST ==========");
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  console.log("==========================");

  res.status(200).json({
    success: true,
    body: req.body,
  });
});

// ===============================
// Root
// ===============================
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ===============================
// Routes
// ===============================
app.use("/api/products", router);

app.use("/api/orders", orderroutes);

app.use("/api/customers", customerRouter);

export default app;