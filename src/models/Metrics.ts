export enum MetricsStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface MetricsData {
  id: number;
  title: string;
  description?: string;
  status: MetricsStatus;
  priority: number;
}

export class Metrics {
  constructor(private data: MetricsData) {}

  get id(): number {
    return this.data.id;
  }

  get title(): string {
    return this.data.title;
  }

  isActive(): boolean {
    return this.data.status === MetricsStatus.ACTIVE;
  }

  setPriority(priority: number): void {
    this.data.priority = Math.min(priority, 10);
  }
}
// auto-commit: 1778586733912