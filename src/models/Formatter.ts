export enum FormatterStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface FormatterData {
  id: number;
  title: string;
  description?: string;
  status: FormatterStatus;
  priority: number;
}

export class Formatter {
  constructor(private data: FormatterData) {}

  get id(): number {
    return this.data.id;
  }

  get title(): string {
    return this.data.title;
  }

  isActive(): boolean {
    return this.data.status === FormatterStatus.ACTIVE;
  }

  setPriority(priority: number): void {
    this.data.priority = Math.min(priority, 10);
  }
}
// auto-commit: 1778735994308