import type { Department } from "@shared/types/Department";
//import { DepartmentList } from "../Data/employees";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const EMPLOYEE_ENDPOINT = "/employees"

export async function getAllDepartments(): Promise<Department[]> {
    const employeeResponse: Response = await fetch(
        `${BASE_URL}${EMPLOYEE_ENDPOINT}`
    );

    if (!employeeResponse) {
        throw new Error("Failed to fetch employees");
    }

    const json = await employeeResponse.json();
    return json.employeeList;
}

export async function createEmployee(departmentName: string, employeeName: string) {
    if (!departmentName || !employeeName) {
        throw new Error("Unable to add employee due to missing inputs.")
    }

    const newEmployeeData = { department: departmentName, name: employeeName };

    const response: Response = await fetch(`${BASE_URL}${EMPLOYEE_ENDPOINT}/new`, {
        method: "POST",
        body: JSON.stringify(newEmployeeData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response) {
        throw new Error("Error retrieving data.")
    }

    const json = await response.json();
    return json;
}