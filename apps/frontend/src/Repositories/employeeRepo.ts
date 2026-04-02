import type { Employee } from "@shared/types/Employee";


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const EMPLOYEE_ENDPOINT = "/employees"


export async function getAllDepartments(): Promise<Employee[]> {
    console.log("BASE_URL:", BASE_URL);
    const employeeResponse: Response = await fetch(
        `${BASE_URL}${EMPLOYEE_ENDPOINT}`
    );

    if (!employeeResponse) {
        throw new Error("Failed to fetch employees");
    }

    const json = await employeeResponse.json();
    return json.employeeList;
}


export async function createEmployee(departmentName: string, employeeName: string, sessionToken: string) {
    if (!departmentName || !employeeName) {
        throw new Error("Unable to add employee due to missing inputs.")
    }
    if (!sessionToken) {
        throw new Error("Unauthorized")
    }
    const newEmployeeData = { department: departmentName, name: employeeName };
    
    const response: Response = await fetch(`${BASE_URL}${EMPLOYEE_ENDPOINT}/new`, {
        method: "POST",
        body: JSON.stringify(newEmployeeData),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`
        }
    });

    if (!response.ok) {
        throw new Error("Error retrieving data.")
    }

    const json = await response.json();
    return json;
}