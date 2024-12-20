import Link from "next/link";
import { AirVent } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <Link href="/" className="flex items-center">
          <AirVent className="size-6 mr-2" />
          <span>BetterAuth Demo</span>
        </Link>
        <div>
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
