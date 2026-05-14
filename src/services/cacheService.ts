import { EventEmitter } from 'events';

export class CacheService extends EventEmitter {
  private cache: Map<string, any>;

  constructor() {
    super();
    this.cache = new Map();
  }

  async get(key: string): Promise<any> {
    return this.cache.get(key);
  }

  async set(key: string, value: any): Promise<void> {
    this.cache.set(key, value);
    this.emit('updated', { key, value });
  }

  async delete(key: string): Promise<boolean> {
    return this.cache.delete(key);
  }

  async clear(): Promise<void> {
    this.cache.clear();
  }
}
// auto-commit: 1778741355078