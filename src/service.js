class DemoService {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  getAll() { return [...this.items]; }
  clear() { this.items = []; }
  // auto-commit: 1777444440429
}

module.exports = DemoService;
