import "./Organization.css"
import type { Organization } from "../../Types/Organization";


function OrganizationList({ organizations }: { organizations: Organization[] }) {
  return (
    <ul id="organizations">
      {organizations.map((organization, index) => (
        <div key={index}>
          <li className="organization-titles">{organization.role}</li>
          <li className="organization-list">{organization.name}</li>
        </div>
      ))}
    </ul>
  )
}

export default OrganizationList; 