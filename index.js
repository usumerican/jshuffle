/**
 * Generates a random integer.
 *
 * @param {number} n max integer exclusive
 * @returns {number}
 */
export function randomInt(n) {
  return Math.floor(Math.random() * n);
}

/**
 * Shuffles elements in place.
 *
 * @template T
 * @param {T[]} target
 * @param {(n: number) => number} randomFn
 * @returns T[] same as target
 */
export function shuffle(target, randomFn = randomInt) {
  for (let i = target.length; i > 1; ) {
    const r = randomFn(i--);
    [target[i], target[r]] = [target[r], target[i]];
  }
  return target;
}

/**
 * Shuffles elements out of place.
 *
 * @template T
 * @param {T[]} source
 * @param {(n: number) => number} randomFn
 * @returns T[]
 */
export function toShuffled(source, randomFn = randomInt) {
  return shuffle(source.slice(), randomFn);
}

/**
 * Chooses samples in place.
 *
 * @template T
 * @param {T[]} target
 * @param {number} len
 * @param {(n: number) => number} randomFn
 * @returns T[] same as target
 */
export function sample(target, len, randomFn = randomInt) {
  if (len > 0) {
    if (len < target.length) {
      for (let i = 0; i < len; i++) {
        const r = i + randomFn(target.length - i);
        [target[i], target[r]] = [target[r], target[i]];
      }
      target.length = len;
    } else {
      shuffle(target, randomFn);
    }
  } else {
    target.length = 0;
  }
  return target;
}

/**
 * Chooses samples out of place.
 *
 * @template T
 * @param {T[]} source
 * @param {number} len
 * @param {(n: number) => number} randomFn
 * @returns T[]
 */
export function toSampled(source, len, randomFn = randomInt) {
  return sample(source.slice(), len, randomFn);
}
