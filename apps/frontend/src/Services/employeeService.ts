import * as employeeRepo from "../Repositories/employeeRepo"
import type { Department } from "@shared/types/Department"
import { newEmployee } from "@shared/types/newEmployee";


export async function fetchEmployees(): Promise<Department[]> {
    const employees = await employeeRepo.getAllDepartments(); 
    const departments: Department[] = [];

    for (const emp of employees) {
        let dept = departments.find(d => d.name === emp.department);

        if (!dept) {
            dept = { name: emp.department, employees: [] };
            departments.push(dept);
        }
        dept.employees.push(emp.name);
    }
    return departments;
}


export async function createEmployeeService(employeeName: string, departmentName: string): Promise<newEmployee[]> {
    if (!employeeName || employeeName.length < 3) {
        throw new Error("Employee name must be at least 3 characters.");
    }
    return await employeeRepo.createEmployee(departmentName, employeeName);
}