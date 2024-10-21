//장소 관리
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//components
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";
import { UserLocationList } from "@/utils/service/UserLocationList";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FileUpload } from "primereact/fileupload";
import ManageMenuBar from "@/components/management/manageMenuBar/ManageMenuBar";

const Home = () => {
  const router = useRouter();
  const path = router.pathname;
  const pageName = path.split("/")[1];
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  // const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    UserLocationList.getTreeNodes().then((data) => setNodes(data));
  }, []);

  //Tree Node custom
  const nodeTemplate = (node: TreeNode) => {
    let treeLabelImage = "";
    //라벨에 따른 이미지 설정
    switch (node.data) {
      case "노인주거 복지시설":
        treeLabelImage = "/assets/images/icon-tree-home.svg";
        break;
      case "노인의료 복지시설":
        treeLabelImage = "/assets/images/icon-tree-heart.svg";
        break;
      case "노인여가 복지시설":
        treeLabelImage = "/assets/images/icon-tree-welfare.svg";
        break;
      case "재가노인 복지시설":
        treeLabelImage = "/assets/images/icon-tree-sanction.svg";
        break;
      case "노인보호 전문기관":
        treeLabelImage = "/assets/images/icon-tree-protec.svg";
        break;
      case "노인일자리 전문기관":
        treeLabelImage = "/assets/images/icon-tree-job.svg";
        break;
      case "학대피해 노인 전용 쉼터":
        treeLabelImage = "/assets/images/icon-tree-abuse.svg";
        break;
      default:
        treeLabelImage = "/assets/images/icon-tree-home.svg"; // 기본 이미지
        break;
    }
    return (
      <div className="w-full flex justify-between items-center">
        <span className="flex">
          <Image
            src={treeLabelImage}
            alt="아이콘"
            width={16}
            height={16}
            style={{ marginRight: "8px" }}
          />
          {node.label}
        </span>
        {node.children && node.children.length > 0 && (
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
        )}
      </div>
    );
  };

  // 우측 테이블 내용
  const data1 = [
    { header: "지역", col1: "지역명" },
    { header: "시설 종류", col1: "내용노출" },
    { header: "주소", col1: "내용노출" },
    { header: "좌표", col1: "내용노출" },
  ];
  const data2 = [
    {
      header: "도면",
      body: (
        <div className="w-52 h-28 bg-gray-400 border border-slate-800 rounded-2xl">
          <FileUpload
            chooseLabel="file upload"
            mode="basic"
            name="demo[]"
            url="/api/upload"
            accept="image/*"
            maxFileSize={1000000}
            className="w-full h-full"
          />
        </div>
      ),
    },
  ];
  const data3 = [
    {
      header: "CI",
      body: (
        <div className="w-52 h-28 bg-gray-400 border border-slate-800 rounded-2xl">
          <FileUpload
            chooseLabel="file upload"
            mode="basic"
            name="demo[]"
            url="/api/upload"
            accept="image/*"
            maxFileSize={1000000}
            className="w-full h-full"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 h-full overflow-y-scroll">
      <ManageMenuBar pageName={pageName} />
      <div className="flex gap-4 justify-between max-small:flex-col">
        <div className="card w-1/5 flex flex-col gap-4 max-small:w-full">
          <div className="p-inputgroup">
            <InputText
              placeholder="장소 그룹 검색"
              className="p-2 bg-main-800 max-medium:text-sm"
            />
            <Button icon="pi pi-search" className="bg-sub-700" />
          </div>
          <div>
            <Tree
              value={nodes}
              selectionMode="single"
              // selectionKeys={selectedKey}
              // onSelectionChange={(e) => setSelectedKey(e.value)}
              nodeTemplate={nodeTemplate}
              className="w-full"
            />
          </div>
        </div>
        <div className="card flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="card-title">명칭노출</h3>
            <Button
              label="장소 추가"
              className="text-orange-400"
              icon="pi pi-plus-circle"
              iconPos="right"
            />
          </div>
          <div className="border border-main-200">
            <div>
              <DataTable
                value={data1}
                className="w-full vertical-table-custom"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="col1" />
              </DataTable>
            </div>
            <div className="flex max-small:flex-col">
              <DataTable
                value={data2}
                className="flex-1 w-1/2 vertical-table-custom max-small:w-full"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="body" />
              </DataTable>
              <DataTable
                value={data3}
                className="flex-1 w-1/2 vertical-table-custom max-small:w-full"
                showHeaders={false}
              >
                <Column field="header" />
                <Column field="body" />
              </DataTable>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button label="수정" className="border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
