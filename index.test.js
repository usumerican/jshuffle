import { test } from 'node:test';
import assert from 'node:assert';
import { randomInt, sample, shuffle, toSampled, toShuffled } from 'jshuffle';

test('randomInt', () => {
  const r = randomInt(100);
  assert.ok(r >= 0);
  assert.ok(r < 100);
});

test('shuffle', () => {
  let count = 0;
  const randomFn = (n) => {
    count++;
    return randomInt(n);
  };
  const source = [1, 2, 3, 4, 5];
  const target = shuffle(source, randomFn);
  console.log(target);
  assert.strictEqual(target, source);
  assert.deepStrictEqual(target.sort(), [1, 2, 3, 4, 5]);
  assert.strictEqual(count, 4);
});

test('toShuffled', () => {
  const source = [1, 2, 3, 4, 5];
  const target = toShuffled(source);
  console.log(target);
  assert.notStrictEqual(target, source);
  assert.deepStrictEqual(source, [1, 2, 3, 4, 5]);
});

test('sample', () => {
  for (const [len, expectedLength, expectedCount] of [
    [-1, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
    [4, 4, 4],
    [5, 5, 4],
    [6, 5, 4],
  ]) {
    let count = 0;
    const randomFn = (n) => {
      count++;
      return randomInt(n);
    };
    const source = [1, 2, 3, 4, 5];
    const target = sample(source, len, randomFn);
    console.log(target);
    assert.strictEqual(target, source);
    assert.strictEqual(target.length, expectedLength);
    assert.strictEqual(count, expectedCount);
  }
});

test('toSampled', () => {
  const source = [1, 2, 3, 4, 5];
  const target = toSampled(source, 3);
  console.log(target);
  assert.notStrictEqual(target, source);
  assert.deepStrictEqual(source, [1, 2, 3, 4, 5]);
  assert.strictEqual(target.length, 3);
});
