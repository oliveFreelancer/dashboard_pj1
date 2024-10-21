import React from "react";
//components
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import LocalContractLink from "@/components/management/device/localContractLink/LocalContractLink";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Row } from "primereact/row";

const Device = () => {
  //테이블 데이터
  const data = [
    {
      a1: 0,
      a2: (
        <>
          <i className="pi pi-check"></i>
        </>
      ),
      a3: "내용노출",
      a4: "내용노출",
      a5: "내용노출",
      a6: "내용노출",
      a7: 0,
      a8: "내용노출",
      a9: "내용노출",
      a10: 0,
      a11: 0,
      a12: "내용노출",
      a13: (
        <>
          <i className="pi pi-qrcode"></i>
        </>
      ),
      a14: "내용노출",
    },
    {
      a1: 1,
      a2: (
        <>
          <i className="pi pi-check"></i>
        </>
      ),
      a3: "내용노출",
      a4: "내용노출",
      a5: "내용노출",
      a6: "내용노출",
      a7: 0,
      a8: "내용노출",
      a9: "내용노출",
      a10: 0,
      a11: 0,
      a12: "내용노출",
      a13: (
        <>
          <i className="pi pi-qrcode"></i>
        </>
      ),
      a14: "내용노출",
    },
  ];

  const multiHeader = (
    <div>
      {/* 상위 헤더 그룹 */}
      <Row>
        <Column header="번호" rowSpan={2} />
        <Column header="상태" rowSpan={2} />
        <Column header="디바이스" colSpan={5} />
        <Column header="시설장소" colSpan={6} />
        <Column header="업데이트 일시" rowSpan={2} />
      </Row>

      {/* 하위 헤더 그룹 */}
      <Row>
        <Column header="종류" />
        <Column header="이름" />
        <Column header="버전" />
        <Column header="ID" />
        <Column header="항목수" />
        <Column header="시설" />
        <Column header="시설번호" />
        <Column header="동" />
        <Column header="층" />
        <Column header="장소" />
        <Column header="도면위치" />
      </Row>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <TabView>
          {/* 지역 계약처 연동 탭 내용*/}
          <TabPanel
            header="지역 계약처 연동"
            className="text-indigo-200 max-small:text-sm"
          >
            <LocalContractLink />
          </TabPanel>
          {/* 시설 계약처 연동 탭 내용*/}
          <TabPanel
            header="시설 계약처 연동"
            className="text-indigo-200 max-small:text-sm"
          >
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
        </TabView>
      </div>
      {/* 하단 결과 */}
      <div className="card flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center max-small:flex-col max-small:justify-between max-small:items-start max-small:gap-2">
          <p className="text-white">
            검색결과 <strong className="text-yellow-500">890</strong>건
          </p>
          <div className="flex gap-2 justify-end">
            <Button
              label="개별 등록"
              icon="pi pi-plus-circle"
              iconPos="right"
              className="border border-sub-600 max-small:text-sm"
            />
            <Button
              label="일괄 등록"
              icon="pi pi-plus-circle"
              iconPos="right"
              className="border border-sub-500 max-small:text-sm"
            />
            <Button
              label="CSV 다운로드"
              icon="pi pi-arrow-circle-down"
              iconPos="right"
              className="border max-small:text-sm"
            />
          </div>
        </div>
        <div>
          <DataTable
            value={data}
            headerColumnGroup={multiHeader}
            tableStyle={{ minWidth: "100rem" }}
          >
            <Column field="a1" className="text-indigo-200" />
            <Column field="a2" className="text-indigo-200" />
            <Column field="a3" className="text-indigo-200" />
            <Column field="a4" className="text-indigo-200" />
            <Column field="a5" className="text-indigo-200" />
            <Column field="a6" className="text-indigo-200" />
            <Column field="a7" className="text-indigo-200" />
            <Column field="a8" className="text-indigo-200" />
            <Column field="a9" className="text-indigo-200" />
            <Column field="a10" className="text-indigo-200" />
            <Column field="a11" className="text-indigo-200" />
            <Column field="a12" className="text-indigo-200" />
            <Column field="a13" className="text-indigo-200" />
            <Column field="a14" className="text-indigo-200" />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Device;
