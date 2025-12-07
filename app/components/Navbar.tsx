import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row bg-primary justify-between border-b-2  border-white items-center ">
      <Link href="/" className="pl-6 flex items-center">
        <span className="text-lg text-white font-semibold">Stoic AI</span>
      </Link>
      <div>
        <Button
          asChild
          variant="outline"
          className="
                border-l-2 border-t-0 border-b-0 border-r-0 px-12 h-15 rounded-none bg-primary text-white
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
                border-l-2 border-t-0 border-b-0 border-r-0 px-12 h-15 rounded-none bg-primary text-white
                transition-colors text-lg font-monostoic hover:bg-white hover:text-primary
                "
        >
          <Link prefetch href="/signup">
            Sign up
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
