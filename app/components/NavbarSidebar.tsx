import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavbarSidebar = ({ open, onOpenChange }: Props) => {
  const { data } = useSession();


  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          <Link
            href="/"
            className="w-full text-left p-4 flex items-center text-base font-medium"
            onClick={() => onOpenChange(false)}
          >
            Stoic AI
          </Link>
          {data?.user ? (
            <div className="border-t">
            <Link
              href="/dashboard"
              className="w-full text-left p-4 bg-white text-black hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              Dashboard
            </Link>
            </div>
          ) : (
            <div className="border-t">
              <Link
                href="/login"
                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                onClick={() => onOpenChange(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                onClick={() => onOpenChange(false)}
              >
                Sign up
              </Link>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSidebar;
