export enum WebhookStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface WebhookData {
  id: number;
  title: string;
  description?: string;
  status: WebhookStatus;
  priority: number;
}

export class Webhook {
  constructor(private data: WebhookData) {}

  get id(): number {
    return this.data.id;
  }

  get title(): string {
    return this.data.title;
  }

  isActive(): boolean {
    return this.data.status === WebhookStatus.ACTIVE;
  }

  setPriority(priority: number): void {
    this.data.priority = Math.min(priority, 10);
  }
}
// auto-commit: 1778730938092