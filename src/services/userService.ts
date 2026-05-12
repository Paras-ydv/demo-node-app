export class UserService {
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
    console.log('Processing:', item);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}
// auto-commit: 1778586700089