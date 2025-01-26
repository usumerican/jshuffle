# jshuffle

Random shuffling and sampling

## Installation

```sh
npm install jshuffle
```

## Usage

```javascript
import { sample, shuffle, toSampled, toShuffled } from 'jshuffle';

// Shuffles elements in place
console.log(shuffle([1, 2, 3, 4, 5]));

// Shuffles elements out of place
console.log(toShuffled([1, 2, 3, 4, 5]));

// Chooses samples in place
console.log(sample([1, 2, 3, 4, 5], 3));

// Chooses samples out of place
console.log(toSampled([1, 2, 3, 4, 5], 3));

// Shuffles with seeds
const source = [...Array(100).keys()];
const seeds = crypto.getRandomValues(new Uint32Array(source.length - 1)).map((v, i) => v % (i + 2));
console.log(seeds);
console.log(toShuffled(source, (n) => seeds[n - 2]));

// Shuffles with the same seeds
console.log(toShuffled(source, (n) => seeds[n - 2]));
```
