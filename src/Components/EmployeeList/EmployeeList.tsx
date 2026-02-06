import "./EmployeeList.css"

import type { Department } from "../../Types/Department";

type EmployeeListProps = {
    departments: Department[];
};

function EmployeeList({ departments }: EmployeeListProps) {
    return(
    <ul id="employees">

        {departments.map((department, index) => (
            <div key={index}>
                <li className="department-titles" >{department.name}</li>
                {department.employees.map((employee, employeeIndex) => (
                    <li className="employee-list" key={employeeIndex}> {employee}</li>
                ))}
            </div>         
        ))}
    </ul>);
}

export default EmployeeList;