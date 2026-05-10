const crypto = require('crypto');

class DemoService {
  hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }
  verify(data, hash) {
    return this.hash(data) === hash;
  }
  // auto-commit: 1778406424644
}

module.exports = DemoService;
