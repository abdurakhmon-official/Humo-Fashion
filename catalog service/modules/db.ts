import { PrismaClient } from "../generated/prisma";

if (!global.__db) {
    const prisma = new PrismaClient()

    global.__db = prisma
}

export default global.__db