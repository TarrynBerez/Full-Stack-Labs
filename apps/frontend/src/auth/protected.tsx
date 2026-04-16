import { useAuth, useOrganization } from '@clerk/clerk-react'

export default function Protected({ organization_name, children }: { organization_name: string, children: React.ReactNode }) {
const { isSignedIn, has } = useAuth()
const { organization } = useOrganization()

if (!isSignedIn) return <p>You must be signed in to access this page.</p>

if (!organization) return <p>Set an Active Organization to access this page.</p>

if (!has({ role: 'org:admin' })) return <p>You must be an admin to access this page.</p>

const requiredOrgName = organization_name
if (organization.name !== requiredOrgName) {
    return (
    <>
        <p>
        This page is only accessible in the <strong>{requiredOrgName}</strong> Organization.
        Switch to the <strong>{requiredOrgName}</strong> Organization to access this page.
        </p>
    </>
    )
}

return <>{children}</>
}