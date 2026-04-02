// Components
import OrganizationList from "../Components/Organization/Organization"
import OrganizationForm from "../Components/OrganizationForm/OrganizationForm"
import { SignedIn } from "@clerk/clerk-react";

// Hooks
import { useFormInput } from "../Hooks/departmentHook";


function OrganizationPage() {
    const { organizations, saveOrganization } = useFormInput();
    
    return(
    <>
       <SignedIn>
            <OrganizationForm saveOrganization={saveOrganization}/>
       </SignedIn>
        
        <OrganizationList organizations={organizations}/>
    </>
   );
}

export default OrganizationPage;