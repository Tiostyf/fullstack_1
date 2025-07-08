import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getProducts);              // ✅ Correct
       // ✅ CORRECT - uses :id
router.post("/", createProduct);
router.put("/:id", updateProduct);         // ✅ CORRECT - uses :id
router.delete("/:id", deleteProduct);      // ✅ CORRECT - uses :id

export default router;
