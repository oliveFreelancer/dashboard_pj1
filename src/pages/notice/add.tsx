//공지사항 추가
import React from "react";

//components
import NoticeAddContainer from "@/components/notice/add/NoticeAddContainer";

const Home = () => {
  return (
    <div className="p-4 h-full overflow-y-scroll">
      <NoticeAddContainer />
    </div>
  );
};

export default Home;
