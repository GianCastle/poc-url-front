import axios, { AxiosResponse } from 'axios';
import { UrlFormSchema } from '../components/UrlForm';
import { UrlDto } from '../domain/short-url';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getAllUrlsAsync = async (): Promise<UrlDto[]> => {
  try {
    const response = await http.get('');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUrlByIdAsync = async (id: string): Promise<UrlDto> => {
  try {
    const response = await http.get(id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUrl = async (
  payload: UrlFormSchema
): Promise<AxiosResponse> => {
  try {
    const response = await http.post('', payload);
    return response;
  } catch (error) {
    throw error;
  }
};
