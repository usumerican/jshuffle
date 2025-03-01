/**
 * Generates a random integer.
 *
 * @param {number} n The max integer exclusive.
 * @returns {number} A random integer between [0, n).
 */
export function randomInt(n) {
  return (Math.random() * n) | 0;
}

/**
 * Makes a shuffle function.
 *
 * @param {() => number} randomFn The function returns a random real number between [0.0, 1.0).
 * @returns A shuffle function.
 */
export function makeShuffle(randomFn) {
  /**
   * @template T
   * @param {T[]} target
   * @returns {T[]}
   */
  return function (target) {
    let i = target.length,
      r;
    while (i > 1) {
      r = (randomFn() * i--) | 0;
      [target[r], target[i]] = [target[i], target[r]];
    }
    return target;
  };
}

/**
 * Shuffles an array in place.
 *
 * @function
 * @template T
 * @param {T[]} target The array to shuffle.
 * @returns {T[]} A shuffled array same as target.
 */
export const shuffle = makeShuffle(Math.random);

/**
 * Shuffles an array out of place.
 *
 * @template T
 * @param {T[]} source The array to shuffle.
 * @returns {T[]} A new shuffled array.
 */
export function toShuffled(source) {
  return shuffle(source.slice());
}

/**
 * Makes a sample function.
 *
 * @param {() => number} randomFn The function returns a random real number between [0.0, 1.0).
 * @returns A sample function.
 */
export function makeSample(randomFn) {
  /**
   * @template T
   * @param {T[]} target
   * @param {number} len
   * @returns {T[]}
   */
  return function (target, len) {
    if (len > 0) {
      if (len < target.length) {
        let i = 0,
          r;
        while (i < len) {
          r = i + ((randomFn() * (target.length - i)) | 0);
          [target[r], target[i]] = [target[i], target[r]];
          i++;
        }
        target.length = len;
      } else {
        makeShuffle(randomFn)(target);
      }
    } else {
      target.length = 0;
    }
    return target;
  };
}

/**
 * Chooses samples in place.
 *
 * @function
 * @template T
 * @param {T[]} target The array to sample.
 * @param {number} len The number of samples.
 * @returns {T[]} A sampled array same as target.
 */
export const sample = makeSample(Math.random);

/**
 * Chooses samples out of place.
 *
 * @template T
 * @param {T[]} source The array to sample.
 * @param {number} len The number of samples.
 * @returns A new sampled array.
 */
export function toSampled(source, len) {
  return sample(source.slice(), len);
}
