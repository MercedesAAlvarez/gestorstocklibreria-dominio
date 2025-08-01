import { Router } from "express";
import { userController } from "../controllers/userController";

const router = Router();


router.post("/", async (req, res) => {
  await userController.handleCreate(req, res);
});

router.get("/email/:email", async (req, res) => {
  await userController.handleFindByEmail(req, res);
});

router.post("/login", async (req, res) => {
  await userController.handleLogin(req, res);
});

export default router;
