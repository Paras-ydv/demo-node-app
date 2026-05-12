import { describe, it, expect, beforeEach } from '@jest/globals';
import { StorageService } from '../src/services/storageService';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    service = new StorageService();
  });

  it('should create instance', () => {
    expect(service).toBeDefined();
  });

  it('should set and get value', async () => {
    await service.set('key', 'value');
    const result = await service.get('key');
    expect(result).toBe('value');
  });

  it('should delete value', async () => {
    await service.set('key', 'value');
    const deleted = await service.delete('key');
    expect(deleted).toBe(true);
    const result = await service.get('key');
    expect(result).toBeUndefined();
  });
});
// auto-commit: 1778586704065