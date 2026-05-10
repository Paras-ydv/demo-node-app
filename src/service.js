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
  // auto-commit: 1778398322452
}

module.exports = DemoService;
