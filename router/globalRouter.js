import express from "express";
import { home, board } from "../controller/userController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.board, board);

export default globalRouter;
