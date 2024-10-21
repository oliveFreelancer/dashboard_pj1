import React from "react";

//components
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";

const LocalContractLink = () => {
  //날짜선택
  // const [date, setDate] = useState(null);
  //드롭다운 옵션
  const options = [
    { name: "옵션1", code: "1" },
    { name: "옵션2", code: "2" },
  ];
  return (
    <div className="flex justify-between gap-2 max-medium:flex-col">
      <div className="flex-1 flex flex-col gap-3">
        {/* 재난타입 */}
        <div className="flex items-center max-medium:flex-col max-medium:items-start max-medium:gap-2">
          <label className="text-indigo-100 w-56 max-small:text-sm">
            재난타입
          </label>
          <div className="flex flex-wrap gap-4">
            <div className="flex align-items-center">
              <RadioButton name="기간선택" value="기간선택" />
              <label htmlFor="ingredient1" className="ml-2 text-indigo-200">
                전체
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="기간선택" value="기간선택" />
              <label htmlFor="ingredient2" className="ml-2 text-indigo-200">
                화재
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="기간선택" value="기간선택" />
              <label htmlFor="ingredient3" className="ml-2 text-indigo-200">
                누출
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="기간선택" value="기간선택" />
              <label htmlFor="ingredient4" className="ml-2 text-indigo-200">
                기타
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="기간선택" value="기간선택" />
              <label htmlFor="ingredient4" className="ml-2 text-indigo-200">
                8VMS
              </label>
            </div>
          </div>
        </div>
        {/* 위치 */}
        <div className="flex items-center max-medium:flex-col max-medium:items-start max-medium:gap-2">
          <label className="text-indigo-100 w-56 max-medium:w-full max-small:text-sm">
            위치
          </label>
          <div className="flex items-center gap-3 max-medium:w-full">
            <Dropdown
              value="전체"
              // onChange={(e) => setSelectedCity(e.value)}
              options={options}
              optionLabel="name"
              placeholder="전체"
              className="w-[200px]"
            />
            <Dropdown
              value="전체"
              // onChange={(e) => setSelectedCity(e.value)}
              options={options}
              optionLabel="name"
              placeholder="전체"
              className="w-[200px]"
            />
          </div>
        </div>
        {/* 조회 기간 */}
        <div className="flex items-center max-medium:flex-col max-medium:items-start max-medium:gap-2">
          <label className="text-indigo-100 w-56 max-medium:w-full max-small:text-sm">
            조회 기간
          </label>
          <div className="mr-4 flex items-center gap-2 max-medium:w-full max-medium:mr-0">
            <Calendar
              // value="{date}"
              // onChange={(e) => setDate(e.value)}
              className="p-2 border border-indigo-900 rounded-md max-medium:w-full"
            />
            <span>~</span>
            <Calendar
              // value={date}
              // onChange={(e) => setDate(e.value)}
              className="p-2 border border-indigo-900 rounded-md max-medium:w-full"
            />
          </div>
          <div className="flex flex-wrap gap-4 max-medium:mt-4">
            <div className="flex align-items-center">
              <RadioButton name="기간선택" value="기간선택" />
              <label htmlFor="ingredient1" className="ml-2 text-indigo-200">
                기간선택
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="오늘" value="오늘" checked />
              <label htmlFor="ingredient2" className="ml-2 text-indigo-200">
                오늘
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="1주" value="1주" checked />
              <label htmlFor="ingredient3" className="ml-2 text-indigo-200">
                1주
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="1개월" value="1개월" checked />
              <label htmlFor="ingredient4" className="ml-2 text-indigo-200">
                1개월
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton name="1년" value="1년" checked />
              <label htmlFor="ingredient4" className="ml-2 text-indigo-200">
                1년
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-2 justify-end">
          <Button label="검색" className="bg-sub-800 max-small:text-sm" />
          <Button label="초기화" className="border max-small:text-sm" />
        </div>
      </div>
    </div>
  );
};

export default LocalContractLink;
