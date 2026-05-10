const EventEmitter = require('events');

class DemoService extends EventEmitter {
  constructor() { super(); this.queue = []; }
  enqueue(job) { this.queue.push(job); this.emit('job', job); }
  dequeue() { return this.queue.shift(); }
  // auto-commit: 1778396493993
}

module.exports = DemoService;
