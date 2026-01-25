import "./Form.css"
import type {Department} from "../../App"


function Form({
    setDepartments
}: {
    departments:Department[]
    setDepartments: React.Dispatch<React.SetStateAction<Department[]>>
}){
    
    function addEmployee(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form);

        const employeeName = formData.get("name") as string
        const departmentName = formData.get("department") as string

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
        }

    return(

    <form method="post" onSubmit={addEmployee}>
        <input placeholder="Full Name" type="text" name="name" minLength={3} required/>
        <select name="department">
            <option value="Executive">Executive</option>
            <option value="Finance & Audit">Finance & Audit</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Operations">Operations</option>
            <option value="IT">IT</option>
            <option value="IT Technician">IT Technician</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    );
}

export default Form;