# jshuffle

Random shuffling and sampling

## Installation

```sh
npm install jshuffle
```

## Usage

```javascript
import { sample, shuffle, toSampled, toShuffled } from 'jshuffle';

// Shuffles an array in place.
console.log(shuffle([1, 2, 3, 4, 5]));

// Shuffles an array out of place.
console.log(toShuffled([1, 2, 3, 4, 5]));

// Chooses samples in place.
console.log(sample([1, 2, 3, 4, 5], 3));

// Chooses samples out of place.
console.log(toSampled([1, 2, 3, 4, 5], 3));
```
