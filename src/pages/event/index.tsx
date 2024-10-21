//이벤트관리
import React from "react";
import { useRouter } from "next/router";

//components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import ManageMenuBar from "@/components/management/manageMenuBar/ManageMenuBar";
import LocalContractLink from "@/components/management/event/localContractLink/LocalContractLink";

const Home = () => {
  const router = useRouter();
  const path = router.pathname;
  const pageName = path.split("/")[1];
  //테이블 샘플 데이터
  const data1 = [
    {
      id: 0,
      No: 0,
      opt1: "내용노출",
      opt2: "내용노출",
      opt3: "내용노출",
      opt4: "내용노출",
      opt5: "내용노출",
      opt6: "내용노출",
      opt7: 0,
      opt8: 0,
      opt9: "내용노출",
      opt10: "내용노출",
      opt11: "내용노출",
    },
    {
      id: 1,
      No: 1,
      opt1: "내용노출",
      opt2: "내용노출",
      opt3: "내용노출",
      opt4: "내용노출",
      opt5: "내용노출",
      opt6: "내용노출",
      opt7: "내용노출",
      opt8: "내용노출",
      opt9: "내용노출",
      opt10: "내용노출",
      opt11: "내용노출",
    },
  ];

  return (
    <div className="p-4 h-full overflow-y-scroll">
      <ManageMenuBar pageName={pageName} />
      <div className="flex flex-col gap-4">
        <div className="card">
          <TabView>
            <TabPanel
              header="지역 계약처 연동"
              className="text-indigo-200 max-small:text-sm"
            >
              {/* 지역 계약처 연동 탭 내용 */}
              <LocalContractLink />
            </TabPanel>
            <TabPanel
              header="시설 계약처 연동"
              className="text-indigo-200 max-small:text-sm"
            >
              2
            </TabPanel>
            <TabPanel
              header="이벤트 발생 이력"
              className="text-indigo-200 max-small:text-sm"
            >
              1
            </TabPanel>
            <TabPanel
              header="이벤트 탐지 분석"
              className="text-indigo-200 max-small:text-sm"
            >
              2
            </TabPanel>
          </TabView>
        </div>
        {/* 하단 결과 */}
        <div className="card flex-1 flex flex-col gap-4">
          <div className="flex justify-end items-center gap-2">
            <Button
              label="선택 다운로드"
              icon="pi pi-arrow-circle-down"
              iconPos="right"
              className="border border-sub-800 max-small:text-sm"
            />
            <Button
              label="전체 다운로드"
              icon="pi pi-arrow-circle-down"
              iconPos="right"
              className="border max-small:text-sm"
            />
          </div>
          <div>
            <DataTable
              value={data1}
              paginator
              rows={5}
              tableStyle={{ minWidth: "100rem" }}
            >
              <Column
                selectionMode="multiple"
                style={{ width: "35px" }}
              ></Column>
              <Column
                field="No"
                header="NO"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt1"
                header="일시"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt2"
                header="종료일시"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt3"
                header="유형"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt4"
                header="센서명"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt5"
                header="위치"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt6"
                header="실제/테스트"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt7"
                header="탐지 유형"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt8"
                header="탐지 정보"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt9"
                header="위기경보 단계"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt10"
                header="대응 SOP"
                className="text-slate-400"
              ></Column>
              <Column
                field="opt11"
                header="메모"
                className="text-slate-400"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
