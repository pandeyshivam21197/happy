import { Platform } from "react-native";

export type OSTypes = "ios" | "android" | "windows" | "macos" | "web";

export const isAndroid = (): boolean => {
  return Platform.OS === "android";
};

export const isIOS = (): boolean => {
  return Platform.OS === "ios";
};

export const isWeb = (): boolean => {
  return Platform.OS === "web";
};

export const isMobile = (): boolean => {
  return isAndroid() || isIOS();
};

export const getPlatform = (): OSTypes => Platform.OS;
