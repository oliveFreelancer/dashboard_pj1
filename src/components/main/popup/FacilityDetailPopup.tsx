//시설 상세 팝업
import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface FacilityDetailPopupProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FacilityDetailPopup: React.FC<FacilityDetailPopupProps> = ({
  visible,
  setVisible,
}) => {
  const headerElement = <div>설비정보</div>;

  const footerContent = (
    <Button
      label="Ok"
      icon="pi pi-check"
      onClick={() => setVisible(false)}
      autoFocus
    />
  );

  return (
    <Dialog
      visible={visible}
      modal
      header={headerElement}
      footer={footerContent}
      style={{ width: "50rem" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      className="facility-detail-popup"
    >
      <div className="text-white">
        <strong className="text-yellow-600 text-lg font-bold">RT3247</strong>
        <div>시설명 : RT3247</div>
        <div>물질명 : 불소, 망간</div>
        <div>관리책임명 : 홍길동</div>
        <div>
          긴급 연락처 :
          <p>
            <span>유선전화</span> 042-023-1235
          </p>
          <p>
            <span>핸드폰</span> 010-1234-5678
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default FacilityDetailPopup;
