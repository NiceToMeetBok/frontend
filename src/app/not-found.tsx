import { Button } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-end font-bold text-5xl text-primary"> 404</div>
      <div className="font-bold text-3xl"> Page Not Found</div>

      <Link href="/">
        <Button className="bg-secondary py-6 text-xl"> Go Home</Button>
      </Link>
    </div>
  );
}
