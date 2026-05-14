export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface UserData {
  id: number;
  title: string;
  description?: string;
  status: UserStatus;
  priority: number;
}

export class User {
  constructor(private data: UserData) {}

  get id(): number {
    return this.data.id;
  }

  get title(): string {
    return this.data.title;
  }

  isActive(): boolean {
    return this.data.status === UserStatus.ACTIVE;
  }

  setPriority(priority: number): void {
    this.data.priority = Math.min(priority, 10);
  }
}
// auto-commit: 1778734483438