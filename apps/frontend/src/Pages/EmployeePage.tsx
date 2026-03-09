import { useFormInput } from "../Hooks/departmentHook";
import Form from '../Components/Form/Form'
import EmployeeList from '../Components/EmployeeList/EmployeeList'

function EmployeePage() {
    const {departments, createEmployee} = useFormInput()
    return(
    <>
        <Form createEmployee={createEmployee}/>
        <EmployeeList departments={departments}/>
    </>
    );
}

export default EmployeePage;