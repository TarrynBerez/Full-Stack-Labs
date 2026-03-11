import express, {Router} from "express";
import * as organizationController from "../controller/organizationController"

const organizationRouter: Router = express.Router();

organizationRouter.get("/organizations", organizationController.getAllOrganizations);
organizationRouter.get("/organizations/:name", organizationController.getOrganizationByName);
organizationRouter.post("/organizations/new", organizationController.createOrganization);

export default organizationRouter;