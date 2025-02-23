import React from "react";

interface AuthLayoutPageProps {
  children: React.ReactNode;
}

const AuthLayoutPage = ({ children }: AuthLayoutPageProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayoutPage;
