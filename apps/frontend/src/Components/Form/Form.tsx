import "./Form.css"

type FormProp = {
    createEmployee: (employeeName: string, departmentName: string) => void;
};

function Form({createEmployee}: FormProp){
    function addEmployee(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form);

        const employeeName = formData.get("name") as string
        const departmentName = formData.get("department") as string

        createEmployee(employeeName, departmentName)
    }
    return(

    <form method="post" onSubmit={addEmployee}>
        <input placeholder="Full Name" type="text" name="name" minLength={3} required/>
        <select name="department">
            <option value="Administration">Administration</option>
            <option value="Audit">Audit</option>
            <option value="Banking Operations">Banking Operations</option>
            <option value="Communications">Communications</option>
            <option value="Corporate Services">Corporate Services</option>
            <option value="Facilities">Facilities</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Information Technology">Information Technology</option>
            <option value="IT Technician">IT Technician</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    );
}

export default Form;