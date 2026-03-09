import { Request, Response } from "express";
import * as employeeService from "../services/employeeService"

export const getAllEmployees = async (_req: Request, res : Response) => {
    try {
        const employees = await employeeService.getAllEmployeesService()

        res.status(200).json({employeeList: employees})
    } catch {
        res.status(500).json({
            Error: "Unable to fetch data"
        })
    }
}

export const createEmployee = async (req: Request, res : Response) => {
    try {
        const newEmployeeData = req.body

        await employeeService.createEmployeeService(newEmployeeData)

        res.status(200).json({response: "Successfully created new employee."})
    } catch {
        res.status(500).json({
            Error: "Unable to create employee."
        })
    }
}