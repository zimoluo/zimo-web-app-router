const defaultEditorConfig: ThemeDataConfig = {
  palette: {
    primary: [12, 74, 110],
    light: [240, 249, 255],
    saturated: [3, 105, 161],
    middle: [56, 189, 248],
    pastel: [186, 230, 253],
    soft: [125, 211, 252],
    page: [
      {
        type: "radial-gradient",
        angle: 0,
        sizeX: 50,
        sizeY: 50,
        posX: 80,
        posY: 100,
        stops: [
          {
            color: [171, 237, 255],
            opacity: 1,
            at: 0,
          },
          {
            color: [235, 255, 238],
            opacity: 0.0,
            at: 100,
          },
        ],
      },
      {
        type: "radial-gradient",
        angle: 0,
        sizeX: 60,
        sizeY: 60,
        posX: 6,
        posY: 74,
        stops: [
          {
            color: [241, 197, 255],
            opacity: 1,
            at: 0,
          },
          {
            color: [255, 235, 241],
            opacity: 0.0,
            at: 100,
          },
        ],
      },
      {
        type: "linear-gradient",
        posX: -2,
        posY: 30,
        sizeX: 70,
        sizeY: 70,
        angle: 45,
        stops: [
          {
            color: [255, 237, 229],
            opacity: 1,
            at: 20,
          },
          {
            color: [255, 251, 228],
            opacity: 1,
            at: 80,
          },
        ],
      },
    ],
    pageMinimal: [
      {
        type: "linear-gradient",
        posX: -2,
        posY: 30,
        sizeX: 70,
        sizeY: 70,
        angle: 45,
        stops: [
          {
            color: [255, 237, 229],
            opacity: 1,
            at: 20,
          },
          {
            color: [255, 251, 228],
            opacity: 1,
            at: 80,
          },
        ],
      },
    ],
    widget: [
      {
        type: "linear-gradient",
        posX: 50,
        posY: 100,
        sizeX: 80,
        sizeY: 120,
        angle: 45,
        stops: [
          {
            color: [255, 237, 229],
            opacity: 1.0,
            isWidgetOpacity: true,
            at: 20,
          },
          {
            color: [255, 251, 228],
            opacity: 1.0,
            isWidgetOpacity: true,
            at: 80,
          },
        ],
      },
    ],
  },
  siteThemeColor: "#ffedd5",
  favicon: {
    mode: "backdrop",
  },
};

export default defaultEditorConfig;
