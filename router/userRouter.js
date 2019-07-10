import express from "express";
import { userDetail, getEditProfile } from "../controller/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, userDetail);
userRouter.get(routes.editProfile, getEditProfile);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
