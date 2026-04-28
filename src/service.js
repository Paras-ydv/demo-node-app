class DemoService {
  chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
    return chunks;
  }
  flatten(arr) {
    return arr.flat(Infinity);
  }
  // auto-commit: 1777405791762
}

module.exports = DemoService;
