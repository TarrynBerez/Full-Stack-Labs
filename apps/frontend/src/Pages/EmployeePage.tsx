import { useFormInput } from "../Hooks/departmentHook";
import Form from '../Components/Form/Form'
import EmployeeList from '../Components/EmployeeList/EmployeeList'
import { Show} from '@clerk/react'

function EmployeePage() {
    const {departments, createEmployee} = useFormInput()
    return(
    <>
        <Show when="signed-in">
            <Form createEmployee={createEmployee}/>
        </Show>
        <EmployeeList departments={departments}/>
    </>
    );
}

export default EmployeePage;