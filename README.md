[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![CircleCI][circleci-shield]][circleci-url]

[contributors-shield]: https://img.shields.io/github/contributors/HypernovaTX/is-animated-gif.svg?style=for-the-badge
[contributors-url]: https://github.com/HypernovaTX/is-animated-gif/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HypernovaTX/is-animated-gif.svg?style=for-the-badge
[forks-url]: https://github.com/HypernovaTX/is-animated-gif/network/members
[stars-shield]: https://img.shields.io/github/stars/HypernovaTX/is-animated-gif.svg?style=for-the-badge
[stars-url]: https://github.com/HypernovaTX/is-animated-gif/stargazers
[circleci-shield]: https://img.shields.io/circleci/build/github/HypernovaTx/is-animated-gif?style=for-the-badge
[circleci-url]: https://circleci.com/gh/HypernovaTX/is-animated-gif/tree/master
[issues-shield]: https://img.shields.io/github/issues/HypernovaTX/is-animated-gif.svg?style=for-the-badge
[issues-url]: https://github.com/HypernovaTX/is-animated-gif/issues
[license-shield]: https://img.shields.io/github/license/HypernovaTX/is-animated-gif.svg?style=for-the-badge
[license-url]: https://github.com/HypernovaTX/is-animated-gif/blob/master/LICENSE.txt

is-animated-gif
---
Detect animated GIFs from JavaScript buffers.



## Motivation

Process the streamed/buffered GIF files to determine whether it is an animated GIF or not. This is a rewritten code based off on another work as a purpose to adapt to TypeScript: https://github.com/mailcharts/animated-gif-detector



## Installation
#### NPM:
`npm i is-animated-gif`
#### Yarn:
`yarn add is-animated-gif`



## Usage
### Importing:
```ts
import { isAnimatedGif } from 'is-animated-gif';
```
 \- and/or -
 ```ts
import { isAnimatedGifStream } from 'is-animated-gif';
```

Additonal imports you might need:
 ```ts
import fs from 'fs';
import path from 'path';
```

### Async (Stream)

This module is intended to be used as a Stream:
```ts
async () => {
  const file = path.resolve(`./test/files/large-size-not-animated.gif`);
  const stream = fs.createReadStream(file);
  return await isAnimatedGifStream(stream); // returns Promise<boolean>
}
```

URL request stream example:
```ts
http.get(
  'http://smb3a.weebly.com/uploads/1/0/0/7/1007956/7027030.gif',
  async (res) => {
    const result = await isAnimatedGifStream(res); // returns Promise<boolean>
    // Your other codes
  }
);
```

### Sync (Buffer)
If an image is loaded as a buffer directly, a sync function is also available:
```ts
const file = path.resolve('./path/to/file.gif');
const buffer = fs.readFileSync(file);
isAnimatedGif(buffer); // returns boolean
```



## Tests
In order for tests to work, please ensure to install Jest globally:
#### NPM:
`npm i -g jest`

#### Yarn:
`yarn global add jest`

Simply execute `jest` runs the tests.

Please contribute weird animated GIFs to the repository to add to the test cases.



## Credits
Special thanks to the [MailChart](https://github.com/mailcharts) team and other contributers for their hard work!
- Tom Buchok (author) - [GitHub/tbuchok](https://github.com/tbuchok)
- Bradley Spaulding - [GitHub/bspaulding](https://github.com/bspaulding)
- Vilson Vieira - [GitHub/automata](https://github.com/automata)
- Andreas Lind - [GitHub/papandreou](https://github.com/papandreou)
- Priyank Parashar - [GitHub/paras20xx](https://github.com/paras20xx)
