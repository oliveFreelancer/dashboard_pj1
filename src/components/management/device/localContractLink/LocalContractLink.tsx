import React from "react";
import Image from "next/image";
//components
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

const LocalContractLink = () => {
  //캘린더
  // const [date, setDate] = useState(null);
  //드롭다운 옵션
  const options = [
    { name: "옵션1", code: "1" },
    { name: "옵션2", code: "2" },
  ];
  return (
    <div className="flex justify-between gap-2 max-small:flex-col max-small:items-start">
      <div className="flex-1 flex flex-col gap-3 ">
        <div className="flex-1 gap-2 flex max-small:flex-col max-small:gap-2">
          <div className="w-1/3 flex gap-3 items-center max-small:w-full">
            <label className="text-indigo-100 w-56 max-small:w-1/5">
              상태값
            </label>
            <Dropdown
              value="전체"
              // onChange={(e) => setSelectedCity(e.value)}
              options={options}
              optionLabel="name"
              placeholder="전체"
              className="w-[200px] max-small:w-full"
            />
          </div>
          <div className="flex-1 gap-2 flex gap-3 items-center max-small:w-full">
            <label className="text-indigo-100 w-56 max-small:w-1/5">
              설치장소
            </label>
            <Dropdown
              value="전체"
              // onChange={(e) => setSelectedCity(e.value)}
              options={options}
              optionLabel="name"
              placeholder="전체"
              className="w-[200px] max-small:w-2/5"
            />
            <Dropdown
              value="전체"
              // onChange={(e) => setSelectedCity(e.value)}
              options={options}
              optionLabel="name"
              placeholder="Device Ver 전체"
              className="w-[200px] max-small:w-2/5"
            />
          </div>
        </div>
        <div className="flex-1 gap-2 flex max-small:flex-col max-small:gap-2">
          <div className="w-1/3 flex gap-3 items-center max-small:w-full">
            <label className="text-indigo-100 w-56 max-small:w-1/5">조직</label>
            <Dropdown
              value="전체"
              // onChange={(e) => setSelectedCity(e.value)}
              options={options}
              optionLabel="name"
              placeholder="전체"
              className="w-[200px] max-small:w-full"
            />
          </div>
          <div className="flex-1 gap-2 flex flex-wrap gap-3 items-center max-small:flex-col max-small:items-start">
            <label className="text-indigo-100 w-56">업데이트 기간</label>
            <div className="p-2 flex items-center gap-4 bg-main-800 rounded-md ">
              <Image
                src="/assets/images/icon_calendar.svg"
                alt="달력아이콘"
                width={20}
                height={20}
              />
              <Calendar
                // value={date}
                // onChange={(e) => setDate(e.value)}
                placeholder="기간선택(시작일)"
              />
              <span className="text-white text-lg">~</span>
              <Calendar
                // value={date}
                // onChange={(e) => setDate(e.value)}
                placeholder="기간선택(종료일)"
              />
            </div>
            <div className="flex gap-2">
              <Button label="오늘" className="bg-main-800" />
              <Button label="1주일" className="bg-main-800" />
              <Button label="1개월" className="bg-main-800" />
              <Button label="3개월" className="bg-main-800" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center w-full max-small:flex-col max-small:items-start">
          <label className="text-indigo-100 w-56">검색어</label>
          <div className="flex-1 flex flex-wrap gap-4">
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                checked
              />
              <label htmlFor="ingredient1" className="ml-2 text-indigo-200">
                Device 종류
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                checked
              />
              <label htmlFor="ingredient2" className="ml-2 text-indigo-200">
                Device 명
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                checked
              />
              <label htmlFor="ingredient3" className="ml-2 text-indigo-200">
                Device ID
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                checked
              />
              <label htmlFor="ingredient4" className="ml-2 text-indigo-200">
                변경자
              </label>
            </div>
            <div className="flex-1 ml-4">
              <InputText
                value=""
                // onChange={(e) => setValue(e.target.value)}
                className="w-1/3 p-2 bg-transparent border border-indigo-800"
                placeholder="옵션 선택 후 검색이 가능합니다."
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-2 justify-end">
          <Button label="검색" className="bg-sub-800" />
          <Button label="초기화" className="border" />
        </div>
      </div>
    </div>
  );
};

export default LocalContractLink;
