import React, { useState } from "react";
import Image from "next/image";

//components
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState({ name: "2024년" });
  const cities = [{ name: "2024년" }, { name: "2023년" }];
  const month = [{ name: "7월" }, { name: "6월" }];

  return (
    <div className="dashboard flex flex-col gap-4">
      <div className="card w-max flex gap-2 items-center text-white">
        <Image
          src="/assets/images/ic_notice.svg"
          alt="공지사항아이콘"
          width={28}
          height={28}
        />
        <span className="text-xl font-bold max-medium:text-base">
          Dashboard 통계분석
        </span>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="2024년"
          className="custom-blue-dropdown"
        />
      </div>
      <div className="flex gap-4 jusitfy-between max-medium:flex-col">
        <div className="flex w-3/4 gap-4 max-medium:flex-col max-medium:w-full">
          {/* 계약 현황 */}
          <div className="card w-2/3 flex flex-col gap-2 text-white max-medium:w-full">
            <div className="w-full flex justify-between items-center">
              <h3 className="card-title">계약 현황</h3>
              <div className="flex gap-2">
                <Button label="서울" />
                <Button label="지역별" />
                <Button label="지역별" />
                <Button label="지역별" />
              </div>
            </div>
            {/* 그래프 */}
            <div>
              <Image
                src="/assets/images/graph_sample1.png"
                alt="그래프"
                layout="responsive"
                width={886}
                height={319}
              />
            </div>
          </div>
          {/* 접속 현황 */}
          <div className="card w-1/3 flex flex-col gap-2 text-white max-medium:w-full">
            <div className="w-full flex justify-between items-center">
              <h3 className="card-title">접속 현황</h3>
              <div className="flex gap-2">
                <Button label="지역별" />
                <Button label="시설별" />
                <Button label="App" />
              </div>
            </div>
            {/* 그래프 */}
            <div>
              <Image
                src="/assets/images/graph_sample2.png"
                alt="그래프"
                layout="responsive"
                width={604}
                height={406}
              />
            </div>
          </div>
        </div>
        {/* 고객 현황 */}
        <div className="card flex-1 flex flex-col gap-2 text-white">
          <div className="w-full flex justify-between items-center">
            <h3 className="card-title">고객 현황</h3>
            <div className="flex gap-2">
              <Button label="지역별" />
              <Button label="시설별" />
              <Button label="App" />
            </div>
          </div>
          {/* 그래프 */}
          <div>
            <Image
              src="/assets/images/graph_sample3.png"
              alt="그래프"
              layout="responsive"
              width={528}
              height={415}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-medium:flex-col max-medium:w-full">
        {/* 매출 현황 */}
        <div className="card w-3/4 flex flex-col gap-2 text-white max-medium:w-full">
          <div className="w-full flex justify-between items-center ">
            <h3 className="card-title">매출 현황</h3>
            <div className="flex gap-2">
              <Dropdown
                value={month}
                onChange={(e) => setSelectedCity(e.value)}
                options={month}
                optionLabel="name"
                placeholder="7월"
                className=""
              />
              <Button label="일별" />
              <Button label="월별" />
            </div>
          </div>
          {/* 그래프 */}
          <div>
            <Image
              src="/assets/images/graph_sample4.png"
              alt="그래프"
              layout="responsive"
              width={886}
              height={319}
            />
          </div>
        </div>
        {/* 기타 현황 (App) */}
        <div className="card flex-1 flex flex-col gap-2 text-white">
          <div className="w-full flex justify-between items-center">
            <h3 className="card-title">기타 현황 (App)</h3>
          </div>
          {/* 그래프 */}
          <div>
            <Image
              src="/assets/images/graph_sample5.png"
              alt="그래프"
              layout="responsive"
              width={604}
              height={406}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
