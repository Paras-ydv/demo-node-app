const { randomUUID } = require('crypto');

class DemoService {
  constructor() { this.store = new Map(); }
  set(key, val) { this.store.set(key, val); }
  get(key) { return this.store.get(key); }
  // auto-commit: 1775200974273
}

module.exports = DemoService;
