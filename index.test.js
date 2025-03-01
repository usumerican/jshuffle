import { test } from 'node:test';
import assert from 'node:assert';
import { randomInt, sample, shuffle, toSampled, toShuffled } from 'jshuffle';

test('randomInt', () => {
  assert.strictEqual(randomInt(0), 0);
  assert.strictEqual(randomInt(1), 0);
  const r = randomInt(5);
  console.log('randomInt', r);
  assert.ok(r >= 0);
  assert.ok(r < 5);
});

test('shuffle', () => {
  for (const len of [0, 1, 5]) {
    const origin = [...Array(len).keys()];
    const actual = shuffle(origin);
    console.log('shuffle', actual);
    assert.strictEqual(actual, origin);
    assert.strictEqual(actual.length, len);
  }
});

test('toShuffled', () => {
  for (const len of [0, 1, 5]) {
    const origin = [...Array(len).keys()];
    const actual = toShuffled(origin);
    console.log('toShuffled', actual);
    assert.notStrictEqual(actual, origin);
    assert.strictEqual(actual.length, len);
    assert.deepStrictEqual(origin, [...Array(len).keys()]);
  }
});

test('sample', () => {
  for (const [originLength, sampleLength, expectedLength] of [
    [0, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
    [1, 2, 1],
    [5, 0, 0],
    [5, 1, 1],
    [5, 4, 4],
    [5, 5, 5],
    [5, 6, 5],
  ]) {
    const origin = [...Array(originLength).keys()];
    const actual = sample(origin, sampleLength);
    console.log('sample', actual);
    assert.strictEqual(actual, origin);
    assert.strictEqual(actual.length, expectedLength);
  }
});

test('toSampled', () => {
  for (const [originLength, sampleLength, expectedLength] of [
    [0, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
    [1, 2, 1],
    [5, 0, 0],
    [5, 1, 1],
    [5, 4, 4],
    [5, 5, 5],
    [5, 6, 5],
  ]) {
    const origin = [...Array(originLength).keys()];
    const actual = toSampled(origin, sampleLength);
    console.log('toSampled', actual);
    assert.notStrictEqual(actual, origin);
    assert.strictEqual(actual.length, expectedLength);
    assert.deepStrictEqual(origin, [...Array(originLength).keys()]);
  }
});
