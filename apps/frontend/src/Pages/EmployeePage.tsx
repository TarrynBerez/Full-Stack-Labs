import { useFormInput } from "../Hooks/departmentHook";
import Form from '../Components/Form/Form'
import EmployeeList from '../Components/EmployeeList/EmployeeList'
import { SignedIn } from "@clerk/clerk-react";

function EmployeePage() {
    const {departments, createEmployee} = useFormInput()
    return(
    <>
        <SignedIn>
            <Form createEmployee={createEmployee}/>
        </SignedIn>
        
        <EmployeeList departments={departments}/>
    </>
    );
}

export default EmployeePage;