class DemoService {
  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async retry(fn, times = 3) {
    for (let i = 0; i < times; i++) {
      try { return await fn(); } catch (e) { if (i === times - 1) throw e; }
    }
  }
  // auto-commit: 1777444399382
}

module.exports = DemoService;
