"use client"

import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"


const NavButtons = () => {
const { data } = useSession();
  return (
    <div className="md:block hidden">
        {data?.user ? (
        <div>
          <Button
            asChild
            variant="outline"
            className="
                border-l-2 border-t-0 border-b-2 border-r-0 px-12 h-15 rounded-none bg-primary text-white
            transition-colors text-lg font-monostoic hover:bg-white hover:text-primary
                "
          >
            <Link prefetch href="/dashboard">
              Dashboard
            </Link>
          </Button>
          <Button
            variant="outline"
            className="
                border-l-2 border-t-0 border-b-2 border-r-0 px-12 h-15 rounded-none bg-primary text-white
                transition-colors text-lg font-monostoic hover:bg-white hover:text-primary
                "
            onClick={() => signOut()}
          >
            Log out
          </Button>
        </div>
      ) : (
        <div>
          <Button
            asChild
            variant="outline"
            className="
                border-l-2 border-t-0 border-b border-white border-r-0 px-12 h-15 rounded-none bg-primary text-white
            transition-colors text-lg font-monostoic hover:bg-white hover:text-primary
                "
          >
            <Link prefetch href="/login">
              Login
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="
                border-l-2 border-t-0 border-b border-white border-r-0 px-12 h-15 rounded-none bg-primary text-white
                transition-colors text-lg font-monostoic hover:bg-white hover:text-primary
                "
          >
            <Link prefetch href="/signup">
              Sign up
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default NavButtons