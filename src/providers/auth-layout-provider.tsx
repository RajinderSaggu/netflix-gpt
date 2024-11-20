import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="bg-black bg-opacity-30 h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
