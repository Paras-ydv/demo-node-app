import crypto from 'crypto';

export function hashString(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

export function generateId(): string {
  return crypto.randomUUID();
}

export function encodeBase64(data: string): string {
  return Buffer.from(data).toString('base64');
}

export function decodeBase64(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}
// auto-commit: 1778736414272