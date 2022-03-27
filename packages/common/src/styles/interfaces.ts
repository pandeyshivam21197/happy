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
  normal: fWeights;
  medium: fWeights;
  bold: fWeights;
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

interface ITheme {
  palette: IPalette;
  typography: ITypography;
  button: any;
}

export type fontFamily = "regular" | "medium" | "bold";
export type fontWeight = "normal" | "medium" | "bold";
export type textColor =
  | "titleTextColor"
  | "primaryTextColor"
  | "secondaryTextColor"
  | "disabledTextColor";
export type font =
  | "titleFont"
  | "headingFont"
  | "subHeadingFont"
  | "primaryFont"
  | "secondaryFont";
export type fWeights =
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
