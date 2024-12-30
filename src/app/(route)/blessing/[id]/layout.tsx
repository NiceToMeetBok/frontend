export default function BlessingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-[90vh] max-h-[900px]">{children}</div>;
}
