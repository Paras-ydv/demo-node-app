class DemoService {
  filter(arr, predicate) {
    return arr.filter(predicate);
  }
  map(arr, fn) {
    return arr.map(fn);
  }
  reduce(arr, fn, init) {
    return arr.reduce(fn, init);
  }
  // auto-commit: 1778397846007
}

module.exports = DemoService;
