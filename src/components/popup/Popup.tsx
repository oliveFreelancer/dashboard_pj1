import React from "react";
//components
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const Popup = () => {
  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">팝업 제목</span>
    </div>
  );

  const footerContent = (
    <div className="flex gap-2 justify-center">
      <Button
        label="확인"
        icon="pi pi-check"
        className="bg-sub-800 max-small:text-sm"
        // onClick={() => setVisible(false)}
        autoFocus
      />
      <Button
        label="취소"
        icon="pi pi-check"
        className="bg-main-100 max-small:text-sm"
        // onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );
  return (
    <Dialog
      visible={true}
      modal
      header={headerElement}
      footer={footerContent}
      style={{ width: "50rem" }}
      onHide={() => {
        //   if (!visible) return;
        //   setVisible(false);
      }}
    >
      <div>팝업 내용</div>
    </Dialog>
  );
};

export default Popup;
