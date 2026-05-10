export interface IEmail {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Email implements IEmail {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<IEmail>) {
    this.id = data.id || crypto.randomUUID();
    this.name = data.name || '';
    this.email = data.email || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  update(data: Partial<IEmail>): void {
    Object.assign(this, data);
    this.updatedAt = new Date();
  }

  toJSON(): IEmail {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
// auto-commit: 1778455723554