export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-[90vh] max-h-[900px]">{children}</div>;
}
