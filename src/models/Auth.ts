export enum AuthStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface AuthData {
  id: number;
  title: string;
  description?: string;
  status: AuthStatus;
  priority: number;
}

export class Auth {
  constructor(private data: AuthData) {}

  get id(): number {
    return this.data.id;
  }

  get title(): string {
    return this.data.title;
  }

  isActive(): boolean {
    return this.data.status === AuthStatus.ACTIVE;
  }

  setPriority(priority: number): void {
    this.data.priority = Math.min(priority, 10);
  }
}
// auto-commit: 1778741357152