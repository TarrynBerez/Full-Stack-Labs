import { useState } from "react"
import * as employeeService from "../Services/employeeService"

import type { Department } from "../Types/Department"
import type { Organization } from "../Types/Organization"

import { DepartmentList } from "../Data/employees"
import { organizationList } from "../Data/organizations"

import * as organizationService from "../Services/organizationService"


export function useFormInput() {   
    const [departments, setDepartments] = useState<Department[]>([...DepartmentList])
    const [organizations, setOrganizations] = useState<Organization[]>(organizationList)

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
    };

    function CreateOrganization(name: string, role: string) {
        setOrganizations(prev => [
            ...prev,
                { name, role }
            ]
        );
    };

    function updateOrganization(name: string, newRole: string) {
    setOrganizations(prev =>
        prev.map(o => o.name === name? { ...o, role: newRole }: o)
        );
    };

    function saveOrganization(name: string, role: string) {
    setOrganizations(prev =>
        prev.some(o => o.role === role)
            ? prev.map(o =>
                o.role === role
                    ? { name, role } : o
              ): [
                ...prev,
                { name, role }
              ]
        );
        organizationService.addOrganizationService(role, name)
    }

    return {organizations, 
            departments, 
            createEmployee, 
            CreateOrganization, 
            updateOrganization,
            saveOrganization}
}
