/**
 * 斐波那契队列 (Fibonacci Queue)
 * 这是一个队列实现，可以按需生成斐波那契数列
 */

class FibonacciQueue {
  constructor() {
    this.queue = [];
    this.fibonacciSequence = [0, 1];
    this.currentIndex = 0;
  }

  /**
   * 初始化队列，预生成n个斐波那契数
   * @param {number} n - 要生成的斐波那契数量
   */
  init(n) {
    this.queue = [];
    this.fibonacciSequence = [0, 1];
    this.currentIndex = 0;
    
    for (let i = 0; i < n; i++) {
      this.enqueue(this.getNextFibonacci());
    }
    return this;
  }

  /**
   * 获取下一个斐波那契数
   * @returns {number}
   */
  getNextFibonacci() {
    if (this.fibonacciSequence.length <= this.currentIndex) {
      const a = this.fibonacciSequence[this.fibonacciSequence.length - 2];
      const b = this.fibonacciSequence[this.fibonacciSequence.length - 1];
      this.fibonacciSequence.push(a + b);
    }
    return this.fibonacciSequence[this.currentIndex++];
  }

  /**
   * 入队 - 将元素添加到队列末尾
   * @param {number} value
   */
  enqueue(value) {
    this.queue.push(value);
  }

  /**
   * 出队 - 移除并返回队列头部的元素
   * @returns {number|undefined}
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * 查看队列头部的元素但不移除
   * @returns {number|undefined}
   */
  peek() {
    return this.queue[0];
  }

  /**
   * 获取队列大小
   * @returns {number}
   */
  size() {
    return this.queue.length;
  }

  /**
   * 检查队列是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * 清空队列
   */
  clear() {
    this.queue = [];
    this.currentIndex = 0;
    this.fibonacciSequence = [0, 1];
  }

  /**
   * 将队列转换为数组
   * @returns {number[]}
   */
  toArray() {
    return [...this.queue];
  }

  /**
   * 打印队列内容
   */
  print() {
    console.log('Queue:', this.toArray());
  }
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FibonacciQueue;
}

// 使用示例
if (require.main === module) {
  console.log('=== 斐波那契队列示例 ===\n');

  // 创建并初始化队列
  const fibQueue = new FibonacciQueue();
  fibQueue.init(10);
  
  console.log('初始队列 (前10个斐波那契数):');
  fibQueue.print();
  console.log('队列大小:', fibQueue.size());
  console.log('队头元素:', fibQueue.peek());
  console.log();

  // 出队操作
  console.log('出队操作:');
  console.log('出队元素:', fibQueue.dequeue());
  console.log('出队元素:', fibQueue.dequeue());
  console.log('出队后队列:');
  fibQueue.print();
  console.log();

  // 入队操作 - 自动生成下一个斐波那契数
  console.log('入队操作 (自动生成下一个斐波那契数):');
  fibQueue.enqueue(fibQueue.getNextFibonacci());
  fibQueue.enqueue(fibQueue.getNextFibonacci());
  fibQueue.print();
  console.log();

  // 动态生成斐波那契数
  console.log('动态生成斐波那契数:');
  const dynamicQueue = new FibonacciQueue();
  for (let i = 0; i < 15; i++) {
    dynamicQueue.enqueue(dynamicQueue.getNextFibonacci());
  }
  dynamicQueue.print();
}
