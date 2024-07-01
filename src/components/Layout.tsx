import React, { ReactNode } from "react";
import BodyWrapper from "./BodyWrapper";
import { Sidebar } from "./Sidebar";

// Props 타입 정의
interface DashboardLayoutProps {
  children: ReactNode;
}

// 함수형 컴포넌트를 타입스크립트로 변환
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <BodyWrapper>
      <div className="flex h bg-gray-200">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-scroll">
          <div className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};
