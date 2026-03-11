import { Request, Response } from "express";
import * as organizationService from "../services/organizationService"

export const getAllOrganizations = async (_req: Request, res : Response) => {
    try {
        const organizations = await organizationService.getOrganizations()

        res.status(200).json({organizationList: organizations})
    } catch {
        res.status(500).json({
            Error: "Unable to fetch data"
        })
    }
}

export const createOrganization = async (req: Request, res: Response) => {
    try {
        const newOrganizationData = req.body
        await organizationService.updateOrAddOrganization(newOrganizationData)

        res.status(200).json({newOrganization: "successfully Created"})
    } catch {
        res.status(500).json({
            Error: "Unable to create organization"
        })
    }
}

export const getOrganizationByName = async (req: Request, res: Response) => {
    try {
        const organization = String(req.params.name)
        await organizationService.getOrganizationsByName(organization)

        res.status(200).json({organization: organization})
    } catch {
        res.status(500).json({
            Error: "Unable to get organization by that name"
        })
    }
}

