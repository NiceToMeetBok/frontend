export default function NoBarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[90vh] max-h-[900px]">
      <div className="flex h-full flex-col justify-between px-[6%]">{children}</div>
    </div>
  );
}
