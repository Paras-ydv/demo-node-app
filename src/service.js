const EventEmitter = require('events');

class DemoService extends EventEmitter {
  constructor() { super(); this.queue = []; }
  enqueue(job) { this.queue.push(job); this.emit('job', job); }
  dequeue() { return this.queue.shift(); }
  // auto-commit: 1774908140007
}

module.exports = DemoService;
