import { MMKV } from "react-native-mmkv";
import { Storage } from "redux-persist";

class StorageService {
  storage;

  constructor() {
    this.storage = new MMKV();
  }

  public getReduxStorage = (): Storage => {
    const reduxStorage: Storage = {
      setItem: (key, value) => {
        this.storage.set(key, value);
        return Promise.resolve(true);
      },
      getItem: (key) => {
        const value = this.storage.getString(key);
        return Promise.resolve(value);
      },
      removeItem: (key) => {
        this.storage.delete(key);
        return Promise.resolve();
      },
    };

    return reduxStorage;
  };

  public getNumber = (key: string): number | undefined => {
    const value: number | undefined = this.storage.getNumber(key);

    return value;
  };

  public getString = (key: string): string | undefined => {
    const value: string | undefined = this.storage.getString(key);

    return value;
  };

  public getBoolean = (key: string): boolean | undefined => {
    const value: boolean | undefined = this.storage.getBoolean(key);

    return value;
  };

  public set = (
    key: string,
    data: boolean | string | number | Uint8Array
  ): void => {
    if (typeof data === "object") {
      this.storage.set(key, JSON.stringify(data));
    } else {
      this.storage.set(key, data);
    }
  };

  public delete = (key: string): void => {
    this.storage.delete(key);
  };

  public reset = (): void => {
    this.storage.clearAll();
  };
}
const storageService = new StorageService();
export { storageService as StorageService };
