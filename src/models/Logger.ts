export interface ILogger {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Logger implements ILogger {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<ILogger>) {
    this.id = data.id || crypto.randomUUID();
    this.name = data.name || '';
    this.email = data.email || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  update(data: Partial<ILogger>): void {
    Object.assign(this, data);
    this.updatedAt = new Date();
  }

  toJSON(): ILogger {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
// auto-commit: 1778586749739