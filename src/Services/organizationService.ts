import type { Organization } from "../Types/Organization"
import * as organizationRepo from "../Repositories/organizationRepository"

export function addOrganizationService(role: string, name: string) {
    if (!name || !role) {
        throw new Error("Missing input")
    }

    if (name.trim().length < 3 || role.trim().length < 3) {
        throw new Error("Name and role must be at least 3 letters long");
    }

    const organizationList = organizationRepo.getOrganizations()

    if (!organizationList) {
        throw new Error("Error fetching employee list")
    }

    const newOrganization = {role: role, name: name}
    const roleExists = organizationList.some(r => r.role === role);
    
    if (!roleExists) {
        organizationRepo.AddOrganization(newOrganization)
    }else {
        organizationRepo.updateOrganization(role, newOrganization)
    }
}
   

export function updateOrganizationService(role: string, updatedOrganization: Organization) {

    if (!role) {
        throw new Error("Missing Role.")
    }

    if (!updatedOrganization.name || !updatedOrganization.role) {
        throw new Error("Missing values")
    }
    
    organizationRepo.updateOrganization(role, updatedOrganization)
}