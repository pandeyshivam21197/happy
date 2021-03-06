export interface IPrimaryColor {
  primary01: string;
  primary02: string;
  primary03: string;
}

export interface ISecondaryColor {
  secondary01: string;
  secondary02: string;
}

export interface ITextColor {
  titleTextColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  disabledTextColor: string;
}

export interface IBorderColor {
  border01: string;
}

export interface INeutralColor {
  blackBackground: string;
  white: string;
}

export interface IPalette {
  background: string;
  pageBackground: string;
  danger: string;
  primary: IPrimaryColor;
  secondary: ISecondaryColor;
  textColors: ITextColor;
  borderColors: IBorderColor;
  neutral: INeutralColor;
}

export interface IFontFamily {
  regular: string;
  medium: string;
  bold: string;
}

export interface IFontWeight {
  normal: FWeightsTypes;
  medium: FWeightsTypes;
  bold: FWeightsTypes;
}

export interface IFontConfig {
  fontSize: number;
  lineHeight: number;
}

export interface IFont {
  titleFont: IFontConfig;
  headingFont: IFontConfig;
  subHeadingFont: IFontConfig;
  primaryFont: IFontConfig;
  secondaryFont: IFontConfig;
}

export interface ITypography {
  fontFamily: IFontFamily;
  fontWeight: IFontWeight;
  font: IFont;
}

export interface IButtonType {
  text: string;
  background: string | string[];
  icon: string;
  border: string;
}

export interface IButton {
  primary: IButtonType;
  secondary: IButtonType;
  disable: IButtonType;
  light: IButtonType;
  primaryLight: IButtonType;
  secondaryLight: IButtonType;
}

interface ITheme {
  palette: IPalette;
  typography: ITypography;
  button: IButton;
}

export type FontFamilyType = "regular" | "medium" | "bold";
export type FontWeightType = "normal" | "medium" | "bold";
export type ButtonTypes =
  | "primary"
  | "secondary"
  | "disable"
  | "light"
  | "primaryLight"
  | "secondaryLight";
export type TextColorTypes =
  | "titleTextColor"
  | "primaryTextColor"
  | "secondaryTextColor"
  | "disabledTextColor";
export type FontTypes =
  | "titleFont"
  | "headingFont"
  | "subHeadingFont"
  | "primaryFont"
  | "secondaryFont";
export type FWeightsTypes =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

export default ITheme;
