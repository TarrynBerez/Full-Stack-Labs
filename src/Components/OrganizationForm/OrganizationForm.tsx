import "./OrganizationForm.css"

type Hook = {
    saveOrganization: (name: string, role: string) => void;
};

function OrganizationForm({ saveOrganization }: Hook){
    function addEntry(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get("first-name") as string
        const lastName = formData.get("last-name") as string
        const fullName = `${firstName} ${lastName}`

        const role = formData.get("role") as string

        saveOrganization(fullName, role)
    }
    return(

    <form method="post" onSubmit={addEntry}>
        <input placeholder="First Name" type="text" name="first-name" minLength={3} required/>
        <input placeholder="Last Name" type="text" name="last-name" minLength={3} required/>
        <input placeholder="Role" type="text" name="role" minLength={3} required/>
        <button type="submit">Submit</button>
    </form>
    );
}

export default OrganizationForm;