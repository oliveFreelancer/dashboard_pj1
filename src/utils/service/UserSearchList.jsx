export const UserSearchList = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "조직명",
        data: "조직명",
        children: [
          {
            key: "0-0",
            label: "조직명0-0",
            data: "조직명0-0",
            children: [
              {
                key: "0-0-0",
                label: "조직명0-0-0",
                data: "Expenses Document",
              },
              {
                key: "0-0-1",
                label: "조직명0-0-1",
                data: "Resume Document",
              },
            ],
          },
          {
            key: "0-1",
            label: "조직명0-1",
            data: "조직명0-1",
            children: [
              {
                key: "0-1-0",
                label: "조직명0-1-0",
                data: "Expenses Document",
              },
              {
                key: "0-1-1",
                label: "조직명0-1-1",
                data: "Resume Document",
              },
            ],
          },
        ],
      },
      //   {
      //     key: "1",
      //     label: "Events",
      //     data: "Events Folder",
      //     icon: "pi pi-fw pi-calendar",
      //     children: [
      //       {
      //         key: "1-0",
      //         label: "Meeting",
      //         icon: "pi pi-fw pi-calendar-plus",
      //         data: "Meeting",
      //       },
      //       {
      //         key: "1-1",
      //         label: "Product Launch",
      //         icon: "pi pi-fw pi-calendar-plus",
      //         data: "Product Launch",
      //       },
      //       {
      //         key: "1-2",
      //         label: "Report Review",
      //         icon: "pi pi-fw pi-calendar-plus",
      //         data: "Report Review",
      //       },
      //     ],
      //   },
    ];
  },

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
