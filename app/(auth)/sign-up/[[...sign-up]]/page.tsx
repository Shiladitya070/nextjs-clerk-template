import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen justify-center">
      <SignUp />
    </div>
  );
}
