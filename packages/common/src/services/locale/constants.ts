import en from "@happy/common/src/assets/languages/en.json";

export const resources = {
  en,
};

export enum NamespacesKeys {
  common = "common",
  tab = "tab",
  loginOptionScreen = "loginOptionScreen",
  mobileNumberScreen = "mobileNumberScreen",
  otpScreen = "otpScreen",
  privacyPolicyScreen = "privacyPolicyScreen",
}

export const namespaces = Object.values(NamespacesKeys);
