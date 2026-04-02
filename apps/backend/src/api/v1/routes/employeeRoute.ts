import express, {Router} from "express";
import * as employeeController from "../controller/employeeController"
import { requireAuth } from "@clerk/express";

const employeeRouter: Router = express.Router();

employeeRouter.get("/employees", employeeController.getAllEmployees);
employeeRouter.post("/employees/new", requireAuth(), employeeController.createEmployee);

export default employeeRouter;