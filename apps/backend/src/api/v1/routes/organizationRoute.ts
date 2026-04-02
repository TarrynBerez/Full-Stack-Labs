import express, {Router} from "express";
import * as organizationController from "../controller/organizationController"
import { requireAuth } from "@clerk/express";

const organizationRouter: Router = express.Router();

organizationRouter.get("/organizations", organizationController.getAllOrganizations);
organizationRouter.get("/organizations/:name", organizationController.getOrganizationByName);
organizationRouter.post("/organizations/new", requireAuth(), organizationController.createOrganization);

export default organizationRouter;