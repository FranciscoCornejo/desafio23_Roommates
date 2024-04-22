import express from "express";
const router = express.Router();

import {
  addRoommates,
  getRoommates,
} from "../controllers/habitantesController.js";
import { getGastos } from "../controllers/gastosController.js";

router.post("/roommate", addRoommates);
router.get("/roommates", getRoommates);
router.get("/gastos", getGastos);

export default router;
