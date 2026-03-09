import { DepartmentList } from "../Data/employees"
import {newEmployee} from "@shared/types/newEmployee"

export const getAllEmployeesService = async () => {
    return DepartmentList
}

export async function createEmployeeService(newEmployeeData: newEmployee) {
    if (!newEmployeeData.department || !newEmployeeData.name) {
        throw new Error("Unable to add due to missing inputs.")
    }

    const employeeName = String(newEmployeeData.name)
    const employeeDepartment = String(newEmployeeData.department)
    const foundDepartment = DepartmentList.find(d => d.name === employeeDepartment);

    if(!foundDepartment) {
        throw new Error(`Department with name ${employeeDepartment} does not exist!`);
    }

    try{
        foundDepartment.employees.push(String(employeeName));
    } catch {
        throw new Error("Error adding employee to department.")
    }

    console.log("Updated DepartmentList:", DepartmentList);
    
    return DepartmentList
}