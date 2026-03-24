import prisma from "../../../../prisma/client"; 
import { newEmployee } from "@shared/types/newEmployee";



export const getAllEmployeesService = async () => {
    return prisma.employee.findMany();
};


export const createEmployeeService = async (newEmployeeData: newEmployee) => {
    return prisma.employee.create({ data: newEmployeeData });
};