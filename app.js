import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import routes from "./routes";
import { localMiddleware } from "./middleware";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

export default app;
