import axios, { AxiosInstance } from 'axios';

export interface WorkerConfig {
  baseURL: string;
  timeout?: number;
}

export class WorkerService {
  private client: AxiosInstance;

  constructor(config: WorkerConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 5000,
    });
  }

  async fetch<T>(endpoint: string): Promise<T> {
    const response = await this.client.get<T>(endpoint);
    return response.data;
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.client.post<T>(endpoint, data);
    return response.data;
  }
}
// auto-commit: 1778733379718