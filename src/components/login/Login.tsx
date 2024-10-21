import React from "react";
import Image from "next/image";

//components
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-200px)] overflow-y-hidden">
      <div className="flex max-medium:flex-col">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-white text-6xl max-medium:text-3xl max-small:leading-10">
              Hello!
            </h2>
            <h2 className="text-white text-6xl font-bold max-medium:text-3xl max-small:text-sm max-small:leading-10">
              Have a nice day
            </h2>
          </div>
          <div>
            <form className="flex flex-col justify-center gap-3">
              <p className="text-white text-xl max-medium:text-sm">
                로그인을 해주세요.
              </p>
              <div className="login-form flex flex-col justify-center gap-3">
                <div className="login-box user-name bg-main-100 rounded-md">
                  <InputText
                    id="username"
                    type="text"
                    placeholder="이메일 입력"
                    className="w-full p-2 bg-transparent text-sm"
                  />
                </div>
                <div className="login-box password">
                  <InputText
                    id="password"
                    type="password"
                    placeholder="비밀번호 입력"
                    className="w-full p-2 bg-main-100 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked
                    inputId="keepLogin"
                    className="border rounded-sm overflow-hidden"
                  ></Checkbox>
                  <label
                    htmlFor="keepLogin"
                    className="text-white max-medium:text-sm"
                  >
                    로그인 정보 기억하기
                  </label>
                </div>
                {/* 임시로 페이지 이동 */}
                <Button label="로그인" className="bg-sub-700"></Button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-medium:pb-4 max-medium:w-2/3 max-medium:order-first max-medium:mx-auto">
          <Image
            src="/assets/images/login_object.svg"
            alt="빌딩이미지"
            layout="responsive"
            width={489}
            height={450}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
