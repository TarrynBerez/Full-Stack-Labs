// React Imports 
import { useState } from "react"

// Components
import OrganizationList from "../Components/Organization/Organization"

// Types
import type { Organization } from '../Types/Organization'

// Data
import { organizationList } from '../Data/organizations'



function OrganizationPage() {
    const [organizations] = useState<Organization[]>(organizationList)
    
    return(
    <>
        <OrganizationList organizations={organizations}/>
    </>
   );
}

export default OrganizationPage;