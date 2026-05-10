class DemoService {
  chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
    return chunks;
  }
  flatten(arr) {
    return arr.flat(Infinity);
  }
  // auto-commit: 1778397893926
}

module.exports = DemoService;
