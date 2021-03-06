//for naming color - https://www.color-name.com/hex/1F2142

import ITheme from "@happy/common/src/styles/interfaces";

const theme: ITheme = {
  palette: {
    background: "#FFFFFF",
    pageBackground: "#F4FBFD",
    danger: "#F0647D",
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
      // add new colors here
      blackBackground: "#FAFAFA",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: {
      regular: "Quicksand-Regular",
      medium: "Quicksand-Medium",
      bold: "Quicksand-Bold",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
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
      background: "#EAF0FF",
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
