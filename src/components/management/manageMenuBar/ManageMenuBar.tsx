import React from "react";
import { useRouter } from "next/router";
//components
import { Button } from "primereact/button";

interface ManageMenuBarProps {
  pageName: string | undefined;
}

const ManageMenuBar: React.FC<ManageMenuBarProps> = ({ pageName }) => {
  const router = useRouter();

  return (
    <div className="mb-4 flex gap-2 max-small:overflow-x-auto  scrollbar-hide max-small:w-[768px] max-small:scroll-smooth">
      <Button
        label="관리자 설정"
        icon="pi pi-check"
        className="bg-main-700 max-medium:text-sm max-medium:p-2 "
      />
      <Button
        label="사용자 관리"
        className={`hover:bg-main-700 max-medium:text-sm max-medium:p-2 ${
          pageName === "user" ? "active-button" : ""
        }`}
        onClick={() => {
          router.push("/user");
        }}
      />
      <Button
        label="장소 관리"
        className={`hover:bg-main-700 max-medium:text-sm max-medium:p-2 ${
          pageName === "location" ? "active-button" : ""
        }`}
        onClick={() => {
          router.push("/location");
        }}
      />
      <Button
        label="디바이스 관리"
        className={`hover:bg-main-700 max-medium:text-sm max-medium:p-2 ${
          pageName === "device" ? "active-button" : ""
        }`}
        onClick={() => {
          router.push("/device");
        }}
      />
      <Button
        label="이벤트 관리"
        className={`hover:bg-main-700 max-medium:text-sm max-medium:p-2 ${
          pageName === "event" ? "active-button" : ""
        }`}
        onClick={() => {
          router.push("/event");
        }}
      />
    </div>
  );
};

export default ManageMenuBar;
