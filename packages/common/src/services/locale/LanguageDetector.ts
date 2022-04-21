import { StorageService } from "@happy/common/src/services/storage/StorageService";
import { Logger } from "@happy/common/src/utils/logger";
import { StorageKeys } from "@happy/common/src/services/storage/constants";

const LanguageDetector = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      const language = await StorageService.get(StorageKeys.SELECTED_LANGUAGE);

      if (language) {
        return callback(language as string);
      } else {
        return callback("en");
      }
    } catch (error) {
      Logger.error("Error reading language");
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await StorageService.set(StorageKeys.SELECTED_LANGUAGE, language);
    } catch (error) {
      Logger.error("error");
    }
  },
};

export default LanguageDetector;
