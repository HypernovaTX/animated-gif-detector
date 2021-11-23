import { Readable } from 'stream';

// GIF CONSTANTS: http://www.matthewflickinger.com/lab/whatsinagif/bits_and_bytes.asp (Jump to "Graphics Control Extension")
// Init "Graphics Control Extension"
const BLOCK_TERMINATOR = { value: '00' };
const EXTENSION_INTRODUCER = {
  value: '21',
  head: 0,
  tail: 1
};
const GRAPHIC_CONTROL_LABEL = {
  value: 'f9',
  head: 1,
  tail: 2
};

export function isAnimatedGif(buffer: Buffer, timeout: number = 1000) {
  // NOT a GIF
  if (buffer.slice(0, 3).toString() !== 'GIF') {
    return false;
  }
  // Init
  let result = false;
  let pointer = '';
  let count = 0;
  const initialTime = Date.now();
  // Go through each chunk of the buffer
  for (let i = 0; i < buffer.length; i++) {
    // Timeoput has reached, break the loop
    if (Date.now() >= initialTime + timeout) {
      return false;
    }
    // Get each chunk of the buffer
    const headIntro = i + EXTENSION_INTRODUCER.head;
    const tailIntro = i + EXTENSION_INTRODUCER.tail;
    const headControl = i + GRAPHIC_CONTROL_LABEL.head;
    const tailControl = i + GRAPHIC_CONTROL_LABEL.tail;
    const chunkIntro = buffer.toString('hex', headIntro, tailIntro);
    const chunkControl = buffer.toString('hex', headControl, tailControl);
    // Ensure, the previous chunk is 00, the current chunk is 21 and the next chunk is F9
    result =
      pointer === BLOCK_TERMINATOR.value &&
      chunkIntro === EXTENSION_INTRODUCER.value &&
      chunkControl === GRAPHIC_CONTROL_LABEL.value;
    // If something do match, add on the count
    if (result) {
      count++;
    }
    // If there's more than one "Graphics Control Extension", then it is an animated GIF
    if (count > 1) {
      return true;
    }
    pointer = buffer.toString('hex', i, i + 1);
  }
  // If none matches, return false
  return false;
}

export async function isAnimatedGifStream(
  stream: Readable,
  timeout: number = 1000
) {
  const buffer = await new Promise<Buffer>((resolve, reject) => {
    const _buf = Array<any>();
    stream.on('data', (chunk) => _buf.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(_buf)));
    stream.on('error', (err) => reject(`error converting stream - ${err}`));
  });
  return isAnimatedGif(buffer, timeout);
}
