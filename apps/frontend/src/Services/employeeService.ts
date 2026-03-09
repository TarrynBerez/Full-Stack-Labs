import * as employeeRepo from "../Repositories/employeeRepo"
import type { Department } from "@shared/types/Department"

export async function fetchEmployees(): Promise<Department[]> {
    const employees = await employeeRepo.getAllDepartments();
    return employees
}

export async function createEmployeeService(employeeName: string, departmentName: string): Promise<Department[]> {
    if (!employeeName || employeeName.length < 3) {
        throw new Error("Employee name must be at least 3 characters.");
    }

    const allDepartments = await employeeRepo.getAllDepartments();
    const departmentExists = allDepartments.some(d => d.name === departmentName);

    if (!departmentExists) {
        throw new Error(`Department "${departmentName}" does not exist.`);
    }

    await employeeRepo.createEmployee(departmentName, employeeName);

    return employeeRepo.getAllDepartments();
}