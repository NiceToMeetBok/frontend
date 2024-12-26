import { Suspense } from "react";

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-[90vh] max-h-[900px]">{children}</div>
    </Suspense>
  );
}
