class DemoService {
  async fetchData(url) {
    const res = await fetch(url);
    return res.json();
  }
  transform(data) {
    return Array.isArray(data) ? data.map(d => ({ ...d, processed: true })) : data;
  }
  // auto-commit: 1777395228271
}

module.exports = DemoService;
