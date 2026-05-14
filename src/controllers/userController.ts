import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const items = await this.service.getAll();
      res.json({ success: true, data: items });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      res.json({ success: true, data: item });
    } catch (error) {
      res.status(404).json({ success: false, error: error.message });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const item = await this.service.create(req.body);
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
// auto-commit: 1778737573710