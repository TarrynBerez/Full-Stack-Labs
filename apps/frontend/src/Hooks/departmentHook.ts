import { useState, useEffect } from "react"
import * as employeeService from "../Services/employeeService"

import type { Department } from "@shared/types/Department"
import type { Organization } from "@shared/types/Organization"

import * as organizationService from "../Services/organizationService"
import { useAuth } from "@clerk/clerk-react";


export function useFormInput() { 
    const [departments, setDepartments] = useState<Department[]>([])
    const [organizations, setOrganizations] = useState<Organization[]>([])
    const { getToken, isSignedIn } = useAuth();

    useEffect(() => {
        const loadDepartments = async () => {
        try {
            const data = await employeeService.fetchEmployees();
            setDepartments(data);
        } catch (err) {
            console.error("Failed to fetch employees", err);
        }
    };

    loadDepartments();
  }, []);

    useEffect(() => {
            const loadOrganizations = async () => {
            try {
                const organizationData = await organizationService.getOrganizations();
                setOrganizations(organizationData);
            } catch (err) {
                console.error("Failed to fetch organizations", err);
            }
        };

        loadOrganizations();
    }, []);


    async function createEmployee(employeeName: string, departmentName: string) {
        let sessionToken = isSignedIn? await getToken() : null;

        if (!sessionToken) {
            throw new Error("Not Authorized")
        } else {
            await employeeService.createEmployeeService(employeeName, departmentName, sessionToken);
        }

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
    };
    

    function updateOrganization(name: string, newRole: string) {
    setOrganizations(prev =>
        prev.map(o => o.name === name? { ...o, role: newRole }: o)
        );
    };


    async function saveOrganization(name: string, role: string) {
    let sessionToken = isSignedIn? await getToken() : null;

    if (!sessionToken) {
        throw new Error("Not Authorized")
    } else {
        await organizationService.addOrganizationService(role, name, sessionToken);
    }

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
    }

    return {organizations, 
            departments, 
            createEmployee, 
            updateOrganization,
            saveOrganization}
}
