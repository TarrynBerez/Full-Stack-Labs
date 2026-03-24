import type { Organization } from "@shared/types/Organization";


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const ORGANIZATION_ENDPOINT = "/organizations"


export async function AddOrUpdateOrganization( newOrganization : Organization) {
    if (!newOrganization) {
        throw new Error("Unable to add organization due to missing inputs.")
    }

    const response: Response = await fetch(`${BASE_URL}${ORGANIZATION_ENDPOINT}/new`, {
        method: "POST",
        body: JSON.stringify(newOrganization),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response) {
        throw new Error("Error retrieving data.")
    }

    const json = await response.json();
    return json;
}


export async function getOrganizations(): Promise<Organization[]> {
    const organizationResponse: Response = await fetch(
        `${BASE_URL}${ORGANIZATION_ENDPOINT}`
    );

    if (!organizationResponse) {
        throw new Error("Failed to fetch employees");
    }

    const json = await organizationResponse.json();
    return json.organizationList;
}