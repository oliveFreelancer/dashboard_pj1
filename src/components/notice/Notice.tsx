import React from "react";
import Image from "next/image";
// import { useRouter } from "next/router";

//components
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Accordion, AccordionTab } from "primereact/accordion";
import { FileUpload } from "primereact/fileupload";
// import Popup from "@/components/popup/Popup";

const Notice = () => {
  // const router = useRouter();
  // const [visible, setVisible] = useState(false);
  // const handleNewPostClick = () => {
  //   router.push("/notice/add"); // /notice/new로 이동
  // };

  //공지사항 데이터
  const noticeList = [
    {
      id: 0,
      opt0: "2024-01-01",
      opt1: "2024-01-05",
      opt2: "2024-01-10",
      opt3: "공지사항1 제목이 표출되는 곳",
      opt4: "내용1 본문이 표출됩니다.",
      opt5: "관리자",
      opt6: true,
    },
    {
      id: 1,
      opt0: "2024-02-01",
      opt1: "2024-02-05",
      opt2: "2024-02-10",
      opt3: "공지사항2 제목이 표출되는 곳",
      opt4: "내용2 본문이 표출됩니다.",
      opt5: "홍길동",
      opt6: true,
    },
    {
      id: 2,
      opt0: "2024-03-01",
      opt1: "2024-03-05",
      opt2: "2024-03-10",
      opt3: "공지사항3 제목이 표출되는 곳",
      opt4: "내용3 본문이 표출됩니다.",
      opt5: "홍길동",
      opt6: false,
    },
  ];

  const termsOfUse =
    '<제1장 총칙> 제1조 (목적) 이 약관은 (주)코그(이하 "회사"라고 함)가 제공하는 게임 및 제반 서비스의 이용과 관련하여 회사와 회원의 권리, 의무 및 기타 필요한 사항을 규정함을 목적으로 합니다. 제2조 용어의 정의 ① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. “회원”이라 함은 이 약관에 동의하여 회사와 게임서비스 등에 대한 이용계약을 체결하고 회사에서 제공하는 모든 게임서비스 등을 이용할 수 있는 권한을 획득한 자를 의미합니다. 2. “플랫폼”이라 함은 PC, 휴대폰, 태블릿, 휴대용 게임기, 콘솔 게임기, VR 등의 기기를 통해서 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있도록 제공하는 제반 프로그램과 서비스를 의미합니다. 3. “게임서비스 등”이라 함은 회사가 회원에게 플랫폼을 통하여 제공하는 게임 및 이에 부수된 제반 서비스를 의미합니다. 4. “콘텐츠”라 함은 회사가 게임서비스 등의 제공과 관련하여 디지털 방식으로 제작된 유료 또는 무료의 내용물 일체(캐릭터, 게임머니, 아이템 등)를 의미합니다. 5. “ID” 또는 “계정”이라 함은 회원의 식별과 게임서비스 등의 이용을 위하여 회원이 선정하고 회사가 승인하는, 문자, 특수문자, 숫자 등의 조합 또는 기존에 회원이 사용하고 있던 타 소셜 서비스의 로그인 계정을 의미합니다. 6. “게스트 ID”라 함은 회사에서 제공하는 간소화된 이용신청 절차를 통해 회원의 식별절차 없이 임시로 부여되는 계정을 의미합니다. 7. “계정정보”라 함은 회원의 계정, 비밀번호, 성명 등 회원이 회사에 제공한 개인정보, 기기정보, 게임 이용정보(캐릭터 정보, 아이템, 레벨 등), 이용대금 결제정보 등 계정 또는 ID에 대한 일체의 정보를 의미합니다. 8. “게임 ID”라 함은 ID 또는 계정에 수반하여 특정 게임서비스 등에서만 사용하기 위해 회원이 별도로 생성하고 회사가 승인하는 문자, 특수문자, 숫자 등의 조합을 의미합니다. 9. “비밀번호”라 함은 회원이 자신의 계정을 사용하고, 계정에 대한 접근 권한을 통제하며, 자신의 정보 및 권익보호를 위해 스스로 선정하여 비밀로 관리하는 문자, 특수문자, 숫자 등의 조합을 의미합니다. 10. “게시물”이라 함은 회원이 게임서비스 등을 이용함에 있어 회원이 게시한 문자, 문서, 그림, 음성, 영상 또는 이들의 조합으로 이루어진 정보를 의미합니다. 11. “회원탈퇴”라 함은 회원이 회사와의 게임서비스 등에 대한 이용계약을 해지하는 것을 의미합니다. 12. “캐시”라 함은 회원이 회사의 게임서비스를 이용하기 위해 결제를 통해 충전한 회사의 게임 내 화폐를 의미합니다. ② 이 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관련 법령, 가이드라인 및 운영정책에서 정하는 바에 따릅니다. 관련 법령과 운영정책에서 정하지 않는 것은 일반적인 상관례에 따릅니다. 제3조 (회사정보 등의 제공) 회사는 다음 각 호의 사항을 회원이 알아보기 쉽도록 홈페이지(www.kog.co.kr, 이하 “홈페이지”)나 게임서비스 등 내에 표시합니다. 다만, 제6호와 제7호는 회원이 연결화면을 통하여 볼 수 있도록 할 수 있습니다. 1. 상호 및 대표자의 성명 2. 영업소 소재지 주소(회원의 불만을 처리할 수 있는 곳의 주소를 포함한다) 3. 전화번호, 전자우편주소 4. 사업자 등록번호 5. 통신판매업 신고번호 6. 개인정보처리방침 7. 서비스 이용약관 제4조 (약관의 효력 및 적용과 변경) ① 회사는 이 약관의 내용을 회원이 알 수 있도록 회사에서 운영하는 홈페이지에 게시하거나 연결화면을 제공하는 방법으로 회원에게 공지합니다. ② 이 약관에 동의하고 회원 가입을 한 회원은 약관에 동의한 시점부터 동의한 약관의 적용을 받고 약관의 변경이 있을 경우에는 변경의 효력이 발생한 시점부터 변경된 약관의 적용을 받습니다. 이 약관에 동의하는 것은 정기적으로 홈페이지를 방문하여 약관의 변경 사항을 확인하는 것에 동의하는 것을 의미합니다. ③ 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있습니다. 회사는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여, 그 시행일로부터 7일전 홈페이지 또는 게임서비스 내 화면을 통해 온라인으로 공시합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는 경우에는 시행일로부터 30일전 본문과 같은 방법 또는 회원이 회원 가입 시 등록한 전자우편으로 전송하는 방법으로 회원에게 고지합니다. 변경된 약관은 공시하거나 고지한 시행일로부터 효력이 발생합니다. ④ 회원은 변경된 약관에 대해 거부할 권리가 있습니다. 이 약관의 변경에 대해 이의가 있는 회원은 서비스 이용을 중단하고 회원탈퇴를 할 수 있습니다. 변경된 이용약관의 시행일 이후에도 서비스를 계속 이용하는 경우에는 변경된 약관에 동의한 것으로 간주된다는 내용을 함께 공지하고, 이용자가 시행일 이후 서비스를 이용하는 경우 개정된 약관에 동의한 것으로 봅니다. 제5조 (약관 외 준칙) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 회사가 정한 개별 서비스 이용약관, 가이드라인, 운영정책 및 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「게임산업진흥에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업 진흥법」, 「개인정보 보호법」 등 관련 법령이 적용됩니다. 제6조 (운영정책) ① 회사는 이 약관을 적용하기 위해 필요한 사항과 회원의 권익을 보호하고 서비스 내 질서를 유지하기 위하여 이 약관에서 구체적인 범위를 정하여 위임한 사항을 별도 정책 또는 가이드라인 등 (이하 “운영정책”)으로 정할 수 있습니다. 회원은 이 약관에 동의함으로써 각 게임서비스 및 기타 부가적인 서비스의 개별 운영정책의 적용을 받습니다. ② 회사는 운영정책의 내용을 회원이 알 수 있도록 홈페이지나 게임서비스 내 화면에 게시하거나 그 연결 화면을 제공하는 방법으로 회원에게 공지하여야 합니다. ③ 회원의 권리 또는 의무에 중대한 변경을 가져오거나 약관 내용을 변경하는 것과 동일한 효력이 발생하는 운영정책 개정의 경우에는 제4조 제3항의 절차에 따릅니다. 단, 운영정책 개정이 다음 각 호의 어느 하나에 해당하거나, 약관의 내용을 변경하는 것과 동일한 효력이 발생하는 경우가 아닌 경우에는 회사는 본 조 제2항의 방법으로 사전에 공지한 후 개정 운영정책을 적용합니다. 1. 약관에서 구체적으로 범위를 정하여 위임한 사항을 개정하는 경우 2. 회원의 권리·의무와 관련 없는 사항을 개정하는 경우 3. 운영정책의 내용을 약관에서 정한 내용과 근본적으로 다르지 않고 회원이 예측 가능한 범위 내에서 개정하는 경우';
  const privacyNotice =
    ' <제1장 총칙> 제1조 (목적) 이 약관은 (주)코그(이하 "회사"라고 함)가 제공하는 게임 및 제반 서비스의 이용과 관련하여 회사와 회원의 권리, 의무 및 기타 필요한 사항을 규정함을 목적으로 합니다. 제2조 용어의 정의 ① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. “회원”이라 함은 이 약관에 동의하여 회사와 게임서비스 등에 대한 이용계약을 체결하고 회사에서 제공하는 모든 게임서비스 등을 이용할 수 있는 권한을 획득한 자를 의미합니다. 2. “플랫폼”이라 함은 PC, 휴대폰, 태블릿, 휴대용 게임기, 콘솔 게임기, VR 등의 기기를 통해서 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있도록 제공하는 제반 프로그램과 서비스를 의미합니다. 3. “게임서비스 등”이라 함은 회사가 회원에게 플랫폼을 통하여 제공하는 게임 및 이에 부수된 제반 서비스를 의미합니다. 4. “콘텐츠”라 함은 회사가 게임서비스 등의 제공과 관련하여 디지털 방식으로 제작된 유료 또는 무료의 내용물 일체(캐릭터, 게임머니, 아이템 등)를 의미합니다. 5. “ID” 또는 “계정”이라 함은 회원의 식별과 게임서비스 등의 이용을 위하여 회원이 선정하고 회사가 승인하는, 문자, 특수문자, 숫자 등의 조합 또는 기존에 회원이 사용하고 있던 타 소셜 서비스의 로그인 계정을 의미합니다. 6. “게스트 ID”라 함은 회사에서 제공하는 간소화된 이용신청 절차를 통해 회원의 식별절차 없이 임시로 부여되는 계정을 의미합니다. 7. “계정정보”라 함은 회원의 계정, 비밀번호, 성명 등 회원이 회사에 제공한 개인정보, 기기정보, 게임 이용정보(캐릭터 정보, 아이템, 레벨 등), 이용대금 결제정보 등 계정 또는 ID에 대한 일체의 정보를 의미합니다. 8. “게임 ID”라 함은 ID 또는 계정에 수반하여 특정 게임서비스 등에서만 사용하기 위해 회원이 별도로 생성하고 회사가 승인하는 문자, 특수문자, 숫자 등의 조합을 의미합니다. 9. “비밀번호”라 함은 회원이 자신의 계정을 사용하고, 계정에 대한 접근 권한을 통제하며, 자신의 정보 및 권익보호를 위해 스스로 선정하여 비밀로 관리하는 문자, 특수문자, 숫자 등의 조합을 의미합니다. 10. “게시물”이라 함은 회원이 게임서비스 등을 이용함에 있어 회원이 게시한 문자, 문서, 그림, 음성, 영상 또는 이들의 조합으로 이루어진 정보를 의미합니다. 11. “회원탈퇴”라 함은 회원이 회사와의 게임서비스 등에 대한 이용계약을 해지하는 것을 의미합니다. 12. “캐시”라 함은 회원이 회사의 게임서비스를 이용하기 위해 결제를 통해 충전한 회사의 게임 내 화폐를 의미합니다. ② 이 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관련 법령, 가이드라인 및 운영정책에서 정하는 바에 따릅니다. 관련 법령과 운영정책에서 정하지 않는 것은 일반적인 상관례에 따릅니다. 제3조 (회사정보 등의 제공) 회사는 다음 각 호의 사항을 회원이 알아보기 쉽도록 홈페이지(www.kog.co.kr, 이하 “홈페이지”)나 게임서비스 등 내에 표시합니다. 다만, 제6호와 제7호는 회원이 연결화면을 통하여 볼 수 있도록 할 수 있습니다. 1. 상호 및 대표자의 성명 2. 영업소 소재지 주소(회원의 불만을 처리할 수 있는 곳의 주소를 포함한다) 3. 전화번호, 전자우편주소 4. 사업자 등록번호 5. 통신판매업 신고번호 6. 개인정보처리방침 7. 서비스 이용약관 제4조 (약관의 효력 및 적용과 변경) ① 회사는 이 약관의 내용을 회원이 알 수 있도록 회사에서 운영하는 홈페이지에 게시하거나 연결화면을 제공하는 방법으로 회원에게 공지합니다. ② 이 약관에 동의하고 회원 가입을 한 회원은 약관에 동의한 시점부터 동의한 약관의 적용을 받고 약관의 변경이 있을 경우에는 변경의 효력이 발생한 시점부터 변경된 약관의 적용을 받습니다. 이 약관에 동의하는 것은 정기적으로 홈페이지를 방문하여 약관의 변경 사항을 확인하는 것에 동의하는 것을 의미합니다. ③ 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있습니다. 회사는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여, 그 시행일로부터 7일전 홈페이지 또는 게임서비스 내 화면을 통해 온라인으로 공시합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는 경우에는 시행일로부터 30일전 본문과 같은 방법 또는 회원이 회원 가입 시 등록한 전자우편으로 전송하는 방법으로 회원에게 고지합니다. 변경된 약관은 공시하거나 고지한 시행일로부터 효력이 발생합니다. ④ 회원은 변경된 약관에 대해 거부할 권리가 있습니다. 이 약관의 변경에 대해 이의가 있는 회원은 서비스 이용을 중단하고 회원탈퇴를 할 수 있습니다. 변경된 이용약관의 시행일 이후에도 서비스를 계속 이용하는 경우에는 변경된 약관에 동의한 것으로 간주된다는 내용을 함께 공지하고, 이용자가 시행일 이후 서비스를 이용하는 경우 개정된 약관에 동의한 것으로 봅니다. 제5조 (약관 외 준칙) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 회사가 정한 개별 서비스 이용약관, 가이드라인, 운영정책 및 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「게임산업진흥에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업 진흥법」, 「개인정보 보호법」 등 관련 법령이 적용됩니다. 제6조 (운영정책) ① 회사는 이 약관을 적용하기 위해 필요한 사항과 회원의 권익을 보호하고 서비스 내 질서를 유지하기 위하여 이 약관에서 구체적인 범위를 정하여 위임한 사항을 별도 정책 또는 가이드라인 등 (이하 “운영정책”)으로 정할 수 있습니다. 회원은 이 약관에 동의함으로써 각 게임서비스 및 기타 부가적인 서비스의 개별 운영정책의 적용을 받습니다. ② 회사는 운영정책의 내용을 회원이 알 수 있도록 홈페이지나 게임서비스 내 화면에 게시하거나 그 연결 화면을 제공하는 방법으로 회원에게 공지하여야 합니다. ③ 회원의 권리 또는 의무에 중대한 변경을 가져오거나 약관 내용을 변경하는 것과 동일한 효력이 발생하는 운영정책 개정의 경우에는 제4조 제3항의 절차에 따릅니다. 단, 운영정책 개정이 다음 각 호의 어느 하나에 해당하거나, 약관의 내용을 변경하는 것과 동일한 효력이 발생하는 경우가 아닌 경우에는 회사는 본 조 제2항의 방법으로 사전에 공지한 후 개정 운영정책을 적용합니다. 1. 약관에서 구체적으로 범위를 정하여 위임한 사항을 개정하는 경우 2. 회원의 권리·의무와 관련 없는 사항을 개정하는 경우 3. 운영정책의 내용을 약관에서 정한 내용과 근본적으로 다르지 않고 회원이 예측 가능한 범위 내에서 개정하는 경우';
  return (
    <div className="notice">
      <Button
        aria-label="공지사항 관리"
        className="mb-4 bg-main-700 gap-2 max-small:text-sm max-small:p-2 "
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
      <div className="flex flex-col gap-4">
        <div className="card">
          <TabView>
            <TabPanel
              header="공지사항"
              className="text-indigo-200 max-small:text-sm"
            >
              <div className="flex-1 flex gap-3 items-center max-small:flex-col max-small:items-start">
                <div className="p-2 flex items-center gap-4 bg-main-800 rounded-md ">
                  <Calendar
                    // value={date}
                    // onChange={(e) => setDate(e.value)}
                    placeholder="기간선택(시작일)"
                  />
                  <Image
                    src="/assets/images/icon_calendar.svg"
                    alt="달력아이콘"
                    width={20}
                    height={20}
                  />
                  <span className="text-white text-lg">~</span>
                  <Calendar
                    // value={date}
                    // onChange={(e) => setDate(e.value)}
                    placeholder="기간선택(종료일)"
                  />
                  <Image
                    src="/assets/images/icon_calendar.svg"
                    alt="달력아이콘"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-96 flex gap-4">
                  <InputText
                    placeholder="등록자"
                    className="p-2 bg-main-800 max-medium:text-sm"
                  />
                  <Button label="검색" className="bg-sub-700" />
                </div>
                <Button
                  label="신규등록"
                  className="text-orange-400 ml-auto"
                  icon="pi pi-plus-circle"
                  iconPos="right"
                  // onClick={handleNewPostClick}
                  // onClick={() => setVisible(true)} //
                />
              </div>
              <div className="mt-4 w-full overflow-x-auto">
                <div className="min-w-max">
                  <div className="h-[40px] flex items-center bg-main-800 text-white text-center text-sm font-bold">
                    <div className="w-32">등록일</div>
                    <div className="w-32">시작일</div>
                    <div className="w-32">종료일</div>
                    <div className="flex-1">제목</div>
                    <div className="flex-1">내용</div>
                    <div className="w-32">등록자</div>
                    <div className="w-32">표시여부</div>
                  </div>
                  <Accordion activeIndex={0}>
                    {noticeList.map((notice, id) => {
                      return (
                        <AccordionTab
                          key={id}
                          header={
                            <div className="flex items-center text-white text-center text-zinc-400">
                              <div className="w-32">{notice.opt0}</div>
                              <div className="w-32">{notice.opt1}</div>
                              <div className="w-32">{notice.opt2}</div>
                              <div className="flex-1">{notice.opt3}</div>
                              <div className="flex-1">{notice.opt4}</div>
                              <div className="w-32">{notice.opt5}</div>
                              <div className="w-32">표시여부</div>
                            </div>
                          }
                        >
                          <div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center gap-4">
                                <label
                                  htmlFor="name"
                                  className="w-32 text-white"
                                >
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
                                <label
                                  htmlFor="title"
                                  className="w-32 text-white"
                                >
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
                                <label
                                  htmlFor="start"
                                  className="w-32 text-white"
                                >
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
                                <label
                                  htmlFor="end"
                                  className="w-32 text-white"
                                >
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
                                <label
                                  htmlFor="content"
                                  className="w-32 text-white"
                                >
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
                            <div className="flex gap-4 justify-center">
                              <Button label="저장" className="bg-sub-600" />
                              <Button label="삭제" className="bg-main-200" />
                            </div>
                          </div>
                        </AccordionTab>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </TabPanel>
            <TabPanel
              header="배너 및 약관관리"
              className="text-indigo-200 max-small:text-sm"
            >
              <h3 className="text-white mb-4">・배너 이미지 등록</h3>
              <div className="py-6 flex flex-col items-center gap-4 rounded-md border border-dotted border-gray-700">
                <Image
                  src="/assets/images/ic_upload_.svg"
                  alt="파일업로드"
                  width={40}
                  height={40}
                />
                <p className="text-white">업로드할 파일을 첨부해 주세요.</p>
                <FileUpload
                  chooseLabel="찾아보기"
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="image/*"
                  maxFileSize={1000000}
                />
              </div>
              <div className="mt-4 flex gap-4 max-small:flex-col">
                <div className="flex-1">
                  <h3 className="text-white mb-4">・이용약관</h3>
                  <div className="p-6 max-h-96 flex flex-col items-center gap-4 rounded-md border border-dotted border-gray-700 overflow-y-scroll">
                    <p className="text-sm leading-7">{termsOfUse}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-4">・개인정보처리방침</h3>
                  <div className="p-6 max-h-96 flex flex-col items-center gap-4 rounded-md border border-dotted border-gray-700 overflow-y-scroll">
                    <p className="text-sm leading-7">{privacyNotice}</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>

      {/* <Popup /> */}
    </div>
  );
};

export default Notice;
