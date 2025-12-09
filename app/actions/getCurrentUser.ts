import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/app/lib/prisma"

export default async function getCurrentUser() {
    try {
        let email: string | undefined ;

        if(!email) {
            const session = await getServerSession(authOptions)
            email = session?.user?.email ?? undefined
        }

        if (!email) return null

        const currentUser = await prisma.user.findUnique({where: {email}})
        if (!currentUser) return null

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        }

    } catch (err) {
        console.log("Error in getCurrentUser: ", err)
        return null
    }
}