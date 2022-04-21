import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
    public get = async <T>(key: string): Promise<T | null> => {
        const value: string | null = await AsyncStorage.getItem(key);
        if (!value) {
            return null;
        }

        return JSON.parse(value);
    };

    public set = async <T>(key: string, data: T): Promise<void> => {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    };

    public remove = async (key: string): Promise<void> => {
        await AsyncStorage.removeItem(key);
    };

    public reset = async (): Promise<void> => {
        await AsyncStorage.clear();
    };
}
const storageService = new StorageService();
export { storageService as StorageService };