[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![CircleCI][circleci-shield]][circleci-url]
[![ISC License][license-shield]][license-url]

[contributors-shield]: https://img.shields.io/github/contributors/HypernovaTX/is-animated-gif.svg
[contributors-url]: https://github.com/HypernovaTX/is-animated-gif/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HypernovaTX/is-animated-gif.svg
[forks-url]: https://github.com/HypernovaTX/is-animated-gif/network/members
[stars-shield]: https://img.shields.io/github/stars/HypernovaTX/is-animated-gif.svg
[stars-url]: https://github.com/HypernovaTX/is-animated-gif/stargazers
[circleci-shield]: https://circleci.com/gh/HypernovaTX/is-animated-gif/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/HypernovaTX/is-animated-gif/tree/master
[issues-shield]: https://img.shields.io/github/issues/HypernovaTX/is-animated-gif.svg
[issues-url]: https://github.com/HypernovaTX/is-animated-gif/issues
[license-shield]: https://img.shields.io/github/license/HypernovaTX/is-animated-gif.svg
[license-url]: https://github.com/HypernovaTX/is-animated-gif/blob/master/LICENSE

## is-animated-gif

Detect animated GIFs from JavaScript buffers.

## Motivation

Process the streamed/buffered GIF files to determine whether it is an animated GIF or not. This is a rewritten code based off on another work as a purpose to adapt to TypeScript: https://github.com/mailcharts/animated-gif-detector

## Installation

#### NPM:

`npm i is-animated-gif`

#### Yarn:

`yarn add is-animated-gif`

## Usage/Functions

### Async (Stream)

This function is intended to be used with Stream:

**Function**: `isAnimatedGifStream()`

**Params**: `Stream` (such as: `stream.Stream`, `stream.Readable`, or `http.IncomingMessage`)

**Returns**: `Boolean`

**Example**:

```ts
const file = path.resolve(`./test/files/large-size-not-animated.gif`);
const stream = fs.createReadStream(file);
isAnimatedGifStream(stream);
// ...
```

**External Image example**:

```ts
http.get(
  'http://smb3a.weebly.com/uploads/1/0/0/7/1007956/7027030.gif',
  async (res) => {
    const result = await isAnimatedGifStream(res);
    // ...
  }
);
```

### Sync (Buffer)

This function is intended to be used with Buffer:

**Function**: `isAnimatedGif()`

**Params**: `Buffer`

**Returns**: `Boolean`

**Example**:

```ts
const file = path.resolve('./path/to/file.gif');
const buffer = fs.readFileSync(file);
isAnimatedGif(buffer);
// ...
```

## Tests

Simply execute `npm test` or `yarn test` runs the tests.

Please contribute weird animated GIFs to the repository to add to the test cases.

## Credits

Special thanks to the [MailChart](https://github.com/mailcharts) team and other contributers for their hard work!

- Tom Buchok (author) - [GitHub/tbuchok](https://github.com/tbuchok)
- Bradley Spaulding - [GitHub/bspaulding](https://github.com/bspaulding)
- Vilson Vieira - [GitHub/automata](https://github.com/automata)
- Andreas Lind - [GitHub/papandreou](https://github.com/papandreou)
- Priyank Parashar - [GitHub/paras20xx](https://github.com/paras20xx)
