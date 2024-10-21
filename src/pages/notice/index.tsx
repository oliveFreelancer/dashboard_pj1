//공지사항
import React from "react";

//components
import NoticeContainer from "@/components/notice/NoticeContainer";

const Home = () => {
  return (
    <div className="p-4 h-full overflow-y-scroll">
      <NoticeContainer />
    </div>
  );
};

export default Home;
