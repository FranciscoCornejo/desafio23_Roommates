import express from "express";
const router = express.Router();

import path from "path";
const __dirname = import.meta.dirname;

import {
  getGastos,
  addGasto,
  deleteGasto,
  editGasto,
} from "../controllers/gastosController.js";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/gastos", getGastos);
router.post("/gasto", addGasto);
router.delete("/gasto", deleteGasto);
router.put("/gasto", editGasto);

router.get("*", (req, res) => res.send("ruta no encontrada"));

export default router;
