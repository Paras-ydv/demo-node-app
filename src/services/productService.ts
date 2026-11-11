import { validateProductSchema } from '../utils/validation';
import { recordLatency } from '../utils/metrics';

export class ProductService {
  private queue: Array<any> = [];
  private processing = false;

  async enqueue(item: any): Promise<void> {
    this.queue.push(item);
    if (!this.processing) {
      await this.process();
    }
  }

  private async process(): Promise<void> {
    this.processing = true;
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      await this.handleItem(item);
    }
    this.processing = false;
  }

  private async handleItem(item: any): Promise<void> {
    const started = Date.now();
    if (!validateProductSchema(item)) {
      throw new Error('Invalid product');
    }
    const normalized = normalizeProductPayload(item);
    await this.persistWithRetry(normalized);
    recordLatency('product.handle', Date.now() - started);
  }
}
// auto-commit: 1778737088101