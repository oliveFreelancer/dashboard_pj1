import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//components
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const NoticeAddContainer = () => {
  const router = useRouter();
  const handleNewPostClick = () => {
    router.push("/notice"); // /notice/new로 이동
  };
  return (
    <div>
      <Button
        aria-label="공지사항 관리"
        className="mb-4 bg-main-700 gap-2 max-small:text-sm max-small:p-2 "
        onClick={handleNewPostClick}
      >
        <Image
          src="/assets/images/ic_notice.svg"
          alt="공지사항아이콘"
          width={28}
          height={28}
        />
        <span className="text-xl font-bold max-medium:text-base">
          공지사항 관리
        </span>
      </Button>
      <div className="card">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-4">
            <label htmlFor="name" className="w-32 text-white">
              ・등록자
            </label>
            <InputText
              id="name"
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              className="p-2 bg-main-800 text-white border border-main-200"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="title" className="w-32 text-white">
              ・제목
            </label>
            <InputText
              id="title"
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              className="p-2 w-full bg-main-800 text-white border border-main-200"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="start" className="w-32 text-white">
              ・시작일
            </label>
            <div className="p-2 flex items-center gap-4 bg-main-800 rounded-md ">
              <Calendar
                // value={date}
                // onChange={(e) => setDate(e.value)}
                id="start"
                placeholder="기간선택(시작일)"
              />
              <Image
                src="/assets/images/icon_calendar.svg"
                alt="달력아이콘"
                width={20}
                height={20}
              />
            </div>
            <label htmlFor="end" className="w-32 text-white">
              ・종료일
            </label>
            <div className="p-2 flex items-center gap-4 bg-main-800 rounded-md ">
              <Calendar
                // value={date}
                // onChange={(e) => setDate(e.value)}
                id="end"
                placeholder="기간선택(시작일)"
              />
              <Image
                src="/assets/images/icon_calendar.svg"
                alt="달력아이콘"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="content" className="w-32 text-white">
              ・내용
            </label>
            <InputTextarea
              id="content"
              rows={5}
              cols={30}
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              className="p-2 w-full bg-main-800 text-white border border-main-200"
            />
          </div>
        </div>
        <div className="py-6 flex gap-4 justify-center">
          <Button label="저장" className="bg-sub-600" />
          <Button label="취소" className="bg-main-200" />
        </div>
      </div>
    </div>
  );
};

export default NoticeAddContainer;
