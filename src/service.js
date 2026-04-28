class DemoService {
  validate(obj, schema) {
    return Object.keys(schema).every(k => typeof obj[k] === schema[k]);
  }
  sanitize(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  }
  // auto-commit: 1777401034705
}

module.exports = DemoService;
