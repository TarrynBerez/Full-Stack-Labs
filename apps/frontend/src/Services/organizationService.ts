//import type { Organization } from "@shared/types/Organization"
import { Organization } from "@shared/types/Organization";
import * as organizationRepo from "../Repositories/organizationRepository"

export async function addOrganizationService(role: string, name: string, sessionToken: string) {
    if (!name || !role) {
        throw new Error("Missing input")
    }

    if (name.trim().length < 3 || role.trim().length < 3) {
        throw new Error("Name and role must be at least 3 letters long");
    }

    const newOrganization = {name: name, role: role}

    await organizationRepo.AddOrUpdateOrganization(newOrganization, sessionToken)
}
   

export async function getOrganizations(): Promise<Organization[]> {
    const organizations = await organizationRepo.getOrganizations();
    return organizations
}

