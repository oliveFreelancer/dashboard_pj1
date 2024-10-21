//사용자 관리
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//components
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";
import { UserSearchList } from "@/utils/service/UserSearchList";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import ManageMenuBar from "@/components/management/manageMenuBar/ManageMenuBar";

const Home = () => {
  const router = useRouter();
  const path = router.pathname;
  const pageName = path.split("/")[1];
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    UserSearchList.getTreeNodes().then((data) => setNodes(data));
  }, []);

  const nodeTemplate = (node: TreeNode) => {
    return (
      <div className="w-full flex justify-between items-center">
        <span className="flex items-center">{node.label}</span>
        <div className="pr-2 flex items-center gap-2">
          <Button
            aria-label="요소 삭제"
            className="p-0 rounded-full"
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 전파 방지
              // 버튼 클릭 시 처리할 로직을 여기에 추가
              console.log(`${node.label} 버튼 클릭됨`);
            }}
          >
            <Image
              src="/assets/images/ic_tree_delete.svg"
              alt="삭제"
              width={16}
              height={16}
              priority
            />
          </Button>
          <Button
            aria-label="요소 추가"
            className="p-0 rounded-full"
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 전파 방지
              // 버튼 클릭 시 처리할 로직을 여기에 추가
              console.log(`${node.label} 버튼 클릭됨`);
            }}
          >
            <Image
              src="/assets/images/ic_tree_add.svg"
              alt="삭제"
              width={16}
              height={16}
              priority
            />
          </Button>
        </div>
      </div>
    );
  };

  // 우측 테이블 내용
  const data1 = [
    { header: "사번 ID", col1: "SAMPLE12JKV82KS" },
    { header: "부서", col1: "내용노출" },
    { header: "휴대폰 번호", col1: "010-1234-5678" },
  ];
  const data2 = [
    { header: "이름", col1: "홍길동" },
    { header: "부서 연락처", col1: "031-1234-5678" },
    { header: "이메일", col1: "email.123@emai.co.kr" },
  ];
  const data3 = [
    { header: "권한", col1: "내용노출" },
    {
      header: "메뉴 권한",
      body: (
        <div className="flex flex-wrap gap-3">
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" value="대시보드" checked />
            <label htmlFor="ingredient1" className="ml-2">
              대시보드
            </label>
          </div>
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient2" value="리포트관리" checked />
            <label htmlFor="ingredient2" className="ml-2">
              리포트관리
            </label>
          </div>
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient2" value="사용자관리" checked />
            <label htmlFor="ingredient2" className="ml-2">
              사용자관리
            </label>
          </div>
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient2" value="알림관리" checked />
            <label htmlFor="ingredient2" className="ml-2">
              알림관리
            </label>
          </div>
        </div>
      ),
    },
  ];
  const data4 = [
    { header: "회원가입 일시", col1: "2025-01-01" },
    { header: "최신 업데이트 일시", col1: "2025-01-01" },
  ];
  const data5 = [
    { header: "비고", col1: "내용노출" },
    { header: "변경자 아이디", col1: "id_sample1234" },
  ];

  return (
    <div className="p-4 h-full overflow-y-scroll">
      <ManageMenuBar pageName={pageName} />
      <div className="flex gap-4 justify-between max-small:flex-col">
        <div className="card w-1/5 flex flex-col gap-2 max-small:w-full">
          <div className="p-inputgroup">
            <InputText
              placeholder="조직 및 회원명 검색"
              className="p-2 bg-main-800 max-medium:text-sm"
            />
            <Button icon="pi pi-search" className="bg-sub-700" />
          </div>
          <div>
            <Tree
              value={nodes}
              selectionMode="single"
              nodeTemplate={nodeTemplate}
              // selectionKeys={selectedKey}
              // onSelectionChange={(e) => setSelectedKey(e.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="card flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="card-title">조직명</h3>
            <Button
              label="사용자 추가"
              className="text-orange-400"
              icon="pi pi-plus-circle"
              iconPos="right"
            />
          </div>
          <div>
            <div className="flex max-small:flex-col">
              <DataTable
                value={data1}
                className="flex-1 w-1/2 vertical-table-custom max-small:w-full"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="col1" />
              </DataTable>
              <DataTable
                value={data2}
                className="flex-1 w-1/2 vertical-table-custom max-small:w-full"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="col1" />
              </DataTable>
            </div>
            <div>
              <DataTable
                value={data3}
                className="w-full vertical-table-custom"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="body" />
              </DataTable>
            </div>
            <div className="flex max-small:flex-col">
              <DataTable
                value={data4}
                className="flex-1 w-1/2 vertical-table-custom max-small:w-full"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="col1" />
              </DataTable>
              <DataTable
                value={data5}
                className="flex-1 w-1/2 vertical-table-custom max-small:w-full"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="col1" />
              </DataTable>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button label="비밀번호 재설정" className="border" />
            <Button label="수정" className="border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
