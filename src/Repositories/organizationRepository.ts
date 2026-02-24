import type { Organization } from "../Types/Organization";
import { organizationList } from "../Data/organizations";


export async function AddOrganization( newOrganization : Organization) {
    organizationList.push(newOrganization);
}


export function getOrganizations(): Organization[] {
    return organizationList
}


export function getOrganizationsByName(role: string): Organization {
    const organizationList = getOrganizations()
    const organization = organizationList.find(o => o.role === role)

    if (!organization) {
        throw new Error("No role by that name.")
    }

    return organization 
}


export function updateOrganization(role: string, newOrganization: { name: string; role: string } ) {  
    const index = organizationList.findIndex(o => o.role === role);

    if (index !== -1) {
        organizationList[index] = {
        ...organizationList[index],
        ...newOrganization
        };
    }
}
