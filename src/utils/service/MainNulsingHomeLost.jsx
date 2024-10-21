export const MainNulsingHomeLost = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "요양원1",
        data: "요양원1",
        children: [
          {
            key: "0-0",
            label: "요양원0-0",
            data: "요양원0-0",
          },
          {
            key: "0-1",
            label: "요양원0-1",
            data: "요양원0-1",
          },
        ],
      },
      {
        key: "1",
        label: "요양원2",
        data: "요양원2",
        children: [
          {
            key: "1-0",
            label: "요양원1-0",
            data: "요양원1-0",
          },
          {
            key: "1-1",
            label: "요양원1-1",
            data: "요양원1-1",
          },
        ],
      },
      {
        key: "2",
        label: "요양원3",
        data: "요양원3",
        children: [
          {
            key: "2-0",
            label: "요양원2-0",
            data: "요양원2-0",
          },
          {
            key: "2-1",
            label: "요양원2-1",
            data: "요양원2-1",
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
