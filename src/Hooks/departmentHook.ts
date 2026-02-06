import { useState } from "react"
import * as employeeService from "../Services/employeeService"
import type { Department } from "../Types/Department"
import { DepartmentList } from "../Data/employees"

export function useFormInput() {   
    const [departments, setDepartments] = useState<Department[]>([...DepartmentList])

    function createEmployee(employeeName: string, departmentName: string) {

        const newDepartments = departments.some(d => d.name === departmentName)
            ? departments.map(d => 
                d.name === departmentName 
                    ? {...d, employees: [...d.employees, employeeName]} 
                    : d
            ): [
                ...departments, 
                {name: departmentName, employees: [employeeName]}
            ];

        setDepartments(newDepartments);

        employeeService.createEmployeeService(employeeName, departmentName)
    }

    return {departments, createEmployee}
}
