/**
 * 斐波那契队列测试
 */

const FibonacciQueue = require('./fibonacci-queue.js');

function assert(condition, message) {
  if (!condition) {
    throw new Error('Assertion failed: ' + message);
  }
}

function testFibonacciQueue() {
  console.log('开始测试斐波那契队列...\n');

  // 测试1: 初始化队列
  console.log('测试1: 初始化队列');
  const queue1 = new FibonacciQueue();
  queue1.init(5);
  assert(queue1.size() === 5, '队列大小应为5');
  assert(queue1.toArray()[0] === 0, '第一个元素应为0');
  assert(queue1.toArray()[1] === 1, '第二个元素应为1');
  assert(queue1.toArray()[2] === 1, '第三个元素应为1');
  assert(queue1.toArray()[3] === 2, '第四个元素应为2');
  assert(queue1.toArray()[4] === 3, '第五个元素应为3');
  console.log('✓ 测试1通过\n');

  // 测试2: 出队操作
  console.log('测试2: 出队操作');
  const queue2 = new FibonacciQueue();
  queue2.init(3);
  const dequeued = queue2.dequeue();
  assert(dequeued === 0, '出队元素应为0');
  assert(queue2.size() === 2, '出队后队列大小应为2');
  assert(queue2.peek() === 1, '队头应为1');
  console.log('✓ 测试2通过\n');

  // 测试3: 入队操作
  console.log('测试3: 入队操作');
  const queue3 = new FibonacciQueue();
  queue3.init(3);
  queue3.enqueue(100);
  assert(queue3.size() === 4, '入队后队列大小应为4');
  assert(queue3.toArray()[3] === 100, '新元素应在队列末尾');
  console.log('✓ 测试3通过\n');

  // 测试4: 动态生成斐波那契数
  console.log('测试4: 动态生成斐波那契数');
  const queue4 = new FibonacciQueue();
  for (let i = 0; i < 8; i++) {
    queue4.enqueue(queue4.getNextFibonacci());
  }
  const expected = [0, 1, 1, 2, 3, 5, 8, 13];
  const actual = queue4.toArray();
  for (let i = 0; i < expected.length; i++) {
    assert(actual[i] === expected[i], `索引${i}应为${expected[i]}，实际为${actual[i]}`);
  }
  console.log('✓ 测试4通过\n');

  // 测试5: 清空队列
  console.log('测试5: 清空队列');
  const queue5 = new FibonacciQueue();
  queue5.init(5);
  assert(!queue5.isEmpty(), '队列不应为空');
  queue5.clear();
  assert(queue5.isEmpty(), '队列应为空');
  assert(queue5.size() === 0, '队列大小应为0');
  console.log('✓ 测试5通过\n');

  // 测试6: 空队列出队
  console.log('测试6: 空队列出队');
  const queue6 = new FibonacciQueue();
  const result = queue6.dequeue();
  assert(result === undefined, '空队列出队应返回undefined');
  console.log('✓ 测试6通过\n');

  console.log('===================');
  console.log('所有测试通过! ✓');
  console.log('===================');
}

testFibonacciQueue();
