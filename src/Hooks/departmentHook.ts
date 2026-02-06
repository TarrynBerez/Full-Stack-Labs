import { useState } from "react"
import * as employeeService from "../Services/employeeService"
import type { Department } from "../Types/Department"
import { DepartmentList } from "../Data/employees"

export function useFormInput() {   
    const [departments, setDepartments] = useState<Department[]>([...DepartmentList])

    function createEmployee(employeeName: string, departmentName: string) {

        

        setDepartments(prev => {
            const exists = prev.some(d => d.name === departmentName)

            if (exists) {
                return prev.map(d => d.name === departmentName ? 
                    { ...d, employees: [...d.employees, employeeName] }: d
                )
            }

            return [
                ...prev,
                {
                name: departmentName,
                employees: [employeeName]
                }
            ]
            })
        employeeService.createEmployeeService(employeeName, departmentName)
        }
    return {departments, createEmployee}
}
