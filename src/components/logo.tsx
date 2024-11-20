import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="absolute top-6 left-6">
      <Image
        src="/images/netflix-logo.png"
        alt="Netflix Logo"
        width={120}
        height={40}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
