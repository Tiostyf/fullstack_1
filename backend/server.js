// backend/server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Production static serving
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
