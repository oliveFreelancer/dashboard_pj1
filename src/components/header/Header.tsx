import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Menu as MenuType } from "primereact/menu";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const loginRef = useRef<MenuType>(null); // Menu의 타입으로 설정
  const menuRef = useRef<MenuType>(null); // 같은 방식으로 메뉴 ref 설정

  const clickTitle = () => {
    router.push("/main");
  };

  //로그인 메뉴
  const loginDropDownItens = [
    {
      label: "로그아웃",
      template: () => {
        return (
          <div
            className="p-3 p-menuitem-content flex items-center gap-2 cursor-pointer hover:bg-sub-800"
            data-pc-section="content"
          >
            <Image
              src="/assets/images/ic_menu_home.svg"
              alt="홈 아이콘"
              width={20}
              height={20}
              priority
            />
            <span className="p-menuitem-text" data-pc-section="label">
              로그아웃
            </span>
          </div>
        );
      },
    },
  ];

  // 홈 메뉴
  const items = [
    {
      label: `홈`,
      icon: "pi pi-home",
      className: "text-sm text-teal-400",
      template: () => {
        return (
          <div
            className="p-3 p-menuitem-content flex items-center gap-2 cursor-pointer hover:bg-sub-800"
            data-pc-section="content"
            onClick={() => router.push("/main")}
          >
            <Image
              src="/assets/images/ic_menu_home.svg"
              alt="홈 아이콘"
              width={20}
              height={20}
              priority
            />
            <span className="p-menuitem-text" data-pc-section="label">
              홈
            </span>
          </div>
        );
      },
    },
    {
      label: "Dashboard",
      icon: "pi pi-sign-out",
      template: () => {
        return (
          <div
            className="p-3 p-menuitem-content flex items-center gap-2 cursor-pointer hover:bg-sub-800"
            data-pc-section="content"
            onClick={() => router.push("/dashboard")}
          >
            <Image
              src="/assets/images/ic_menu_dashboard.svg"
              alt="Dashboard"
              width={20}
              height={20}
              priority
            />
            <span className="p-menuitem-text" data-pc-section="label">
              Dashboard
            </span>
          </div>
        );
      },
    },
    {
      label: "관리자 설정",
      icon: "pi pi-sign-out",
      template: () => {
        return (
          <div
            className="p-3 p-menuitem-content flex items-center gap-2 cursor-pointer hover:bg-sub-800"
            data-pc-section="content"
            onClick={() => router.push("/user")}
          >
            <Image
              src="/assets/images/ic_menu_admin.svg"
              alt="관리자설정"
              width={20}
              height={20}
              priority
            />
            <span className="p-menuitem-text" data-pc-section="label">
              관리자 설정
            </span>
          </div>
        );
      },
    },
    {
      label: "공지사항 관리",
      icon: "pi pi-sign-out",
      template: () => {
        return (
          <div
            className="p-3 p-menuitem-content flex items-center gap-2 cursor-pointer hover:bg-sub-800"
            data-pc-section="content"
            onClick={() => router.push("/notice")}
          >
            <Image
              src="/assets/images/ic_menu_notice.svg"
              alt="공지사항"
              width={20}
              height={20}
              priority
            />
            <span className="p-menuitem-text" data-pc-section="label">
              공지사항 관리
            </span>
          </div>
        );
      },
    },
  ];

  // 메뉴를 시작 부분에 렌더링 (Logo 및 제목)
  const start = (
    <div className="flex items-center gap-3">
      <Image
        src="/assets/images/logo.svg"
        alt="세이프윗미 로고"
        width={230}
        height={43}
        className="cursor-pointer"
        onClick={() => router.push("/main")}
      />
      <h1 onClick={clickTitle} className="text-sm text-white">
        코어 애널리시스
      </h1>
    </div>
  );

  // 메뉴를 끝 부분에 렌더링 (Avatar 및 사용자 메뉴)
  const end = (
    <div className="flex items-center gap-4">
      <div>
        <Button
          className="p-overlay-badge cursor-pointer bg-transparent"
          aria-label="홈 메뉴 버튼"
          onClick={(e) => loginRef.current && loginRef.current.toggle(e)}
        >
          <span className="max-medium:text-xs">
            <strong className="text-emerald-200">관리자</strong>님
          </span>
        </Button>
        {/* 관리자 메뉴 Popup */}
        <Menu
          model={loginDropDownItens}
          popup
          ref={loginRef}
          className="mt-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <i className="pi pi-sun text-amber-400"></i>
        <strong className="text-white text-lg ">27.4 °</strong>
      </div>
      <div className="text-white max-medium:text-xs">
        05월 30일 &#40;수&#41; 08:36 PM{" "}
      </div>
      <div>
        <Button
          rounded
          className="p-overlay-badge cursor-pointer bg-emerald-400 max-medium:size-8"
          icon="pi pi-bars"
          aria-label="홈 메뉴 버튼"
          onClick={(e) => menuRef.current && menuRef.current.toggle(e)}
        />
      </div>
      {/* 관리자 메뉴 Popup */}
      <Menu model={items} popup ref={menuRef} className="mt-2" />
    </div>
  );

  return (
    <Menubar
      start={start}
      end={end}
      className="h-[80px] bg-transparent backdrop-blur-sm border-b border-main-200 rounded-none"
    />
  );
}

export default Header;
