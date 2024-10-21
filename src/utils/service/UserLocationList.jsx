export const UserLocationList = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "노인주거 복지시설",
        data: "노인주거 복지시설",
        children: [
          {
            key: "0-0",
            label: "명칭",
            data: "노인주거 복지시설",
          },
          {
            key: "0-1",
            label: "명칭",
            data: "노인주거 복지시설",
          },
          {
            key: "0-2",
            label: "명칭",
            data: "노인주거 복지시설",
          },
          {
            key: "0-3",
            label: "명칭",
            data: "노인주거 복지시설",
          },
        ],
      },
      {
        key: "1",
        label: "노인의료 복지시설",
        data: "노인의료 복지시설",
        children: [
          {
            key: "1-0",
            label: "명칭",
            data: "노인의료 복지시설",
          },
        ],
      },
      {
        key: "2",
        label: "노인여가 복지시설",
        data: "노인여가 복지시설",
        children: [
          {
            key: "2-0",
            label: "명칭",
            data: "노인여가 복지시설",
          },
        ],
      },
      {
        key: "3",
        label: "재가노인 복지시설",
        data: "재가노인 복지시설",
        children: [
          {
            key: "3-0",
            label: "명칭",
            data: "재가노인 복지시설",
          },
        ],
      },
      {
        key: "4",
        label: "노인보호 전문기관",
        data: "노인보호 전문기관",
        children: [
          {
            key: "4-0",
            label: "명칭",
            data: "노인보호 전문기관",
          },
        ],
      },
      {
        key: "5",
        label: "노인일자리 전문기관",
        data: "노인일자리 전문기관",
        children: [
          {
            key: "5-0",
            label: "명칭",
            data: "노인일자리 전문기관",
          },
        ],
      },
      {
        key: "6",
        label: "학대피해 노인 전용 쉼터",
        data: "학대피해 노인 전용 쉼터",
        children: [
          {
            key: "6-0",
            label: "명칭",
            data: "학대피해 노인 전용 쉼터",
          },
        ],
      },
    ];
  },

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
