import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export async function Navbar() {
  const user = await currentUser();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
      </Link>

      <ul className="flex gap-1">
        <li>
          <Button variant="link">
            <Link href="/assignments">Assignments</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/assignments">Home</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/assignments">Contact</Link>
          </Button>
        </li>
      </ul>
      {user ? (
        <UserButton />
      ) : (
        <Button variant="link">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      )}
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
