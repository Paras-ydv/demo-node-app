import { describe, it, expect, beforeEach } from '@jest/globals';
import { UserService } from '../src/services/userService';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
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
// auto-commit: 1778711371800