import React, { ReactNode } from "react";

// Props 타입을 정의
interface BodyWrapperProps {
  children: ReactNode;
}

const BodyWrapper: React.FC<BodyWrapperProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default BodyWrapper;
