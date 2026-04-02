// Components
import OrganizationList from "../Components/Organization/Organization"
import OrganizationForm from "../Components/OrganizationForm/OrganizationForm"
import { Show} from '@clerk/react'

// Hooks
import { useFormInput } from "../Hooks/departmentHook";


function OrganizationPage() {
    const { organizations, saveOrganization } = useFormInput();
    
    return(
    <>
        <Show when="signed-in"> 
            <OrganizationForm saveOrganization={saveOrganization}/>
        </Show>
        <OrganizationList organizations={organizations}/>
    </>
   );
}

export default OrganizationPage;