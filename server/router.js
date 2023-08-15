import Router from "express";
import ApiController from "./controller.js";

const router = Router();

router.post("/saveName", ApiController.saveName);
router.get("/getAll", ApiController.getAll);
router.post("/registration", ApiController.registerUser);
router.post("/login", ApiController.login);

export default router;
