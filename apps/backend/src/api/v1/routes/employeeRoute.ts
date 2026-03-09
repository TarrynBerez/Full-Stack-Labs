import express, {Router} from "express";
import * as employeeController from "../controller/employeeController"

const employeeRouter: Router = express.Router();

employeeRouter.get("/employees", employeeController.getAllEmployees);
employeeRouter.post("/employees/new", employeeController.createEmployee);

export default employeeRouter;