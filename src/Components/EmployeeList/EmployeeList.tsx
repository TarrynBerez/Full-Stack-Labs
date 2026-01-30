import "./EmployeeList.css"
import type { Department } from "../../Types/Department";


function EmployeeList( {departments}:{departments: Department[]} ) {
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