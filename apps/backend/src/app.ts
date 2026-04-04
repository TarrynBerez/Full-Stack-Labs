import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "../config/cors";
import employeeRouter from "./api/v1/routes/employeeRoute";
import organizationRouter from "./api/v1/routes/organizationRoute";
import { clerkMiddleware } from "@clerk/express";

const app: Express = express();

dotenv.config();
app.use(cors(corsOptions));
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/v1", employeeRouter)
app.use("/api/v1", organizationRouter)

export default app; 