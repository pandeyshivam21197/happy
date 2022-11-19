//for naming color - https://www.color-name.com/hex/1F2142
//https://simplecss.eu/rgbatohex.html
//https://chir.ag/projects/name-that-color/#33FFAA

import ITheme from "@happy/common/src/styles/interfaces";

const Colors = {
  springGreen: "rgba(51, 255, 170, 0.25)",
  white: "#ffff",
  monza: "rgba(199, 0, 57 , 0.25)",
};

const theme: ITheme = {
  palette: {
    statusBar: "#dde7f7",
    screenBackground: "#fffff",
    primary: {
      primary01: "#23AFD7", //primary blue
      primary02: "#00A591", //primary green
      primary03: "#FAAF23", //primary orange
    },
    secondary: {
      secondary01: "#1978C8", //secondary blue
      secondary02: "#2DBE41", //secondary green
    },
    textColors: {
      titleTextColor: "#262626", //Black shades
      primaryTextColor: "#595959",
      secondaryTextColor: "#8C8C8C",
      disabledTextColor: "#BFBFBF",
    },
    borderColors: {
      border01: "#D9D9D9",
    },
    neutral: {
      white: "#FFFFFF",
      black: "#000000",
      gray: "#8C8C8C",
      manteeBorder: "rgba(142, 142, 147, 0.2)",
      gossip: "#DCF7C5",
    },
    component: {
      //atoms

      //molecules
      swipeCardBg: Colors.white,
      swipeCardLeftBg: Colors.monza,
      swipeCardRightBg: Colors.springGreen,

      //organisma

      //template
    },
  },
  typography: {
    fontFamily: {
      normal: "Quicksand-Regular",
      medium: "Quicksand-Medium",
      semiBold: "Quicksand-SemiBold",
      bold: "Quicksand-Bold",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    font: {
      titleFont: {
        fontSize: 24,
        lineHeight: 28,
      },
      headingFont: {
        fontSize: 20,
        lineHeight: 26,
      },
      subHeadingFont: {
        fontSize: 16,
        lineHeight: 24,
      },
      primaryFont: {
        fontSize: 14,
        lineHeight: 22,
      },
      secondaryFont: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
  },
  button: {
    primary: {
      text: "#2D3037",
      background: "#FFFFFF",
      icon: "#FFFFFF",
      border: "#337CCE",
    },
    secondary: {
      text: "#2D3037",
      background: "#FFFFFF",
      icon: "#337CCE",
      border: "#EAF0FF",
    },
    light: {
      text: "#74777F",
      background: "#FFFFFF",
      icon: "#337CCE",
      border: "#DFE2EB",
    },
    disable: {
      text: "#8E9199",
      background: "#FFFFFF",
      icon: "#337CCE",
      border: "#DFE2EB",
    },
    transparent: {
      text: "#1978C8",
      background: "transparent",
      icon: "#337CCE",
      border: "#EAF0FF",
    },
    primaryLight: {
      text: "#337CCE",
      background: "#EAF0FF",
      icon: "#337CCE",
      border: "#EAF0FF",
    },
    secondaryLight: {
      text: "#337CCE",
      background: "#FFFFFF",
      icon: "",
      border: "#FFFFFF",
    },
  },
};

export default theme;
