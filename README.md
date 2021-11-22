is-animated-gif
---
Detect animated GIFs from JavaScript buffers.

-----

## Motivation

Process the streamed/buffered GIF files to determine whether it is an animated GIF or not. This is a rewritten code based off on another work as a purpose to adapt to TypeScript: https://github.com/mailcharts/animated-gif-detector

-----
## Installation
#### NPM:
`npm i is-animated-gif`
#### Yarn:
`yarn add is-animated-gif`

-----
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

### Streaming

This module is intended to be used as a Buffer:

```ts
async () => {
  const file = path.resolve(`./test/files/large-size-not-animated.gif`);
  const stream = fs.createReadStream(file);
  return await isAnimatedGifStream(stream); // returns Promise<boolean>
}

```

Particularly, you may want to determine animate *as early as possible* in a given HTTP request, and abort the request as soon as you know:

```js
//var http = require('http')
//  , animated = require('animated-gif-detector')
//;
//var req = http.get('http://domain.com/file.gif')
//  .pipe(animated())
//  .once('animated', function() {
//    req.abort();
//    // do something else!
//  })
//;
// WIP - Will have to test first
```

### Sync

If an img is loaded as a buffer directly, a sync function is also available:

```ts
const file = path.resolve('./path/to/file.gif');
const buffer = fs.readFileSync(file);
isAnimatedGif(buffer); // returns boolean
```
-----
## Tests
In order for tests to work, please ensure to install Jest globally:
#### NPM:
`npm i -g jest`

#### Yarn:
`yarn global add jest`

Simply execute `jest` runs the tests.

Please contribute weird animated GIFs to the repository to add to the test cases.

-----
## Credits
Special thanks to the [MailChart](https://github.com/mailcharts) team and other contributers for their hard work!
- Tom Buchok (author) - [GitHub/tbuchok](https://github.com/tbuchok)
- Bradley Spaulding - [GitHub/bspaulding](https://github.com/bspaulding)
- Vilson Vieira - [GitHub/automata](https://github.com/automata)
- Andreas Lind - [GitHub/papandreou](https://github.com/papandreou)
- Priyank Parashar - [GitHub/paras20xx](https://github.com/paras20xx)
