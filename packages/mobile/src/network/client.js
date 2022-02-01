import axios from 'axios';

class ApiClient {
  apiclient = null;

  constructor(config) {
    let axiosInstance = axios.create({
      baseURL: 'https://61af8cf23e2aba0017c4940f.mockapi.io/api/v1/',
      timeout: 600000,
    });

    this.apiclient = axiosInstance;
  }

  request = async config => {
    try {
      const res = await this.apiclient.request(config);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  get = (url, params = {}) => {
    return this.request({
      method: 'GET',
      url,
      params,
    });
  };
}

const apiClient = new ApiClient({});

export {apiClient as ApiClient};
