import { PrismaClient } from "@prisma/client";
import { organizationSeedData, employeeSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.employee.deleteMany({});
    await prisma.organization.deleteMany({});

    await prisma.organization.deleteMany();
    await prisma.employee.deleteMany();

    // insert terms to db
    const createOrganizations = await prisma.organization.createMany(
        {
            data: organizationSeedData,
            skipDuplicates: true
        }
    );
    const createEmployees = await prisma.employee.createMany(
        {
            data: employeeSeedData,
            skipDuplicates: true
        }
    );
    
    console.log(`CREATED organization: ${createOrganizations}`);
    console.log(`CREATED employee: ${createEmployees}`);
};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 