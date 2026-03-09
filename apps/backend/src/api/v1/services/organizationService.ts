import { organizationList } from "../Data/organizations"
import { Organization } from "@shared/types/Organization"


export async function AddOrganization( newOrganization : Organization) {
    organizationList.push(newOrganization);
}


export async function getOrganizations(): Promise<Organization[]> {
    return organizationList
}


export async function getOrganizationsByName(role: string): Promise<Organization> {
    const organizationList = await getOrganizations()
    const organization = organizationList.find(o => o.role === role)

    if (!organization) {
        throw new Error("No role by that name.")
    }

    return organization 
}


export async function updateOrganization(role: string, newOrganization: { name: string; role: string } ) {  
    const organizationList = await getOrganizations()
    const index = organizationList.findIndex(o => o.role === role);

    if (index !== -1) {
        organizationList[index] = {
        ...organizationList[index],
        ...newOrganization
        };
    }
}

export async function updateOrAddOrganization(organizationData: { name: string; role: string }) {
    if (!organizationData.name || !organizationData.role) {
        throw new Error("Missing input")
    }

    if (organizationData.name.trim().length < 3 || organizationData.role.trim().length < 3) {
        throw new Error("Name and role must be at least 3 letters long");
    }

    const organizationList = await getOrganizations()

    if (!organizationList) {
        throw new Error("Error fetching employee list")
    }

    
    const roleExists = organizationList.some(r => r.role === organizationData.role);
    
    if (!roleExists) {
        await AddOrganization(organizationData)
    }else {
        await updateOrganization(organizationData.role, organizationData)
    }
}
