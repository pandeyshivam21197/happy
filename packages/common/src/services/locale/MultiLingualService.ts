import i18next, { i18n, InitOptions, Module } from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "@happy/common/src/services/locale/LanguageDetector";
import { resources } from "./constants";

const defaultConfig = {
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
};

function createi18Instance(config: InitOptions): i18n {
  const { resources, fallbackLng } = config;
  i18next
    .use(initReactI18next)
    .use(languageDetector as Module)
    .init({
      resources,
      fallbackLng: fallbackLng,
      interpolation: {
        escapeValue: false,
      },
    });
  return i18next;
}

class MultiLingualService {
  private i18Instance: i18n;

  constructor(config: InitOptions) {
    this.i18Instance = createi18Instance(config);
  }

  get i18next() {
    return this.i18Instance;
  }
}

const multiLingualService = new MultiLingualService(defaultConfig);

export { multiLingualService as MultiLingualService };
