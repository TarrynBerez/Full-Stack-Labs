import type { Department } from "../Types/Department";
import { DepartmentList } from "../Data/employees";

export function getAllDepartments(): Department[] {
    return DepartmentList
}

export async function createEmployee(departmentName : string, employeeName: string) {
    const foundDepartment = DepartmentList.find(d => d.name === departmentName);

    if(!foundDepartment) {
        throw new Error(`Department with name ${departmentName} does not exist!`);
    }

    foundDepartment.employees.push(employeeName);
    console.log("Updated DepartmentList:", DepartmentList);
}