// Components
import OrganizationList from "../Components/Organization/Organization"
import OrganizationForm from "../Components/OrganizationForm/OrganizationForm"

// Hooks
import { useFormInput } from "../Hooks/departmentHook";



function OrganizationPage() {
    const { organizations, saveOrganization } = useFormInput();
    
    return(
    <>
        <OrganizationForm saveOrganization={saveOrganization}/>
        <OrganizationList organizations={organizations}/>
    </>
   );
}

export default OrganizationPage;