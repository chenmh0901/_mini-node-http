import axios from 'axios';

export const baseURL = 'http://localhost:3001/';
export function useHttp(options) {
  const config = {
    method: options.method,
    url: baseURL + options.url,
    data: options.data,
  }
  return axios(config);
}
