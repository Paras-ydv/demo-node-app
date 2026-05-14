export interface IAnalytics {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Analytics implements IAnalytics {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<IAnalytics>) {
    this.id = data.id || crypto.randomUUID();
    this.name = data.name || '';
    this.email = data.email || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  update(data: Partial<IAnalytics>): void {
    Object.assign(this, data);
    this.updatedAt = new Date();
  }

  toJSON(): IAnalytics {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
// auto-commit: 1778735074269