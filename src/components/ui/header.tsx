import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex items-center">
      <div className="font-bold text-3xl">{children}</div>
    </header>
  );
};
export { Header };
