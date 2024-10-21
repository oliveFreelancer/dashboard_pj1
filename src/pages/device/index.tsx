//디바이스 관리
import React from "react";
import { useRouter } from "next/router";
//components
import ManageMenuBar from "@/components/management/manageMenuBar/ManageMenuBar";
import DeviceContainer from "@/components/management/device/DeviceContainer";

const Home = () => {
  const router = useRouter();
  const path = router.pathname;
  const pageName = path.split("/")[1];

  return (
    <div className="p-4 h-full overflow-y-scroll">
      <ManageMenuBar pageName={pageName} />
      <DeviceContainer />
    </div>
  );
};

export default Home;
