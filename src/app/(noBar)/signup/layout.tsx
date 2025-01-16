import { Suspense } from "react";
import Loading from "./loading";

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <div>{children}</div>
    </Suspense>
  );
}
