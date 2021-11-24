"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnimatedGifStream = exports.isAnimatedGif = void 0;
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
function isAnimatedGif(buffer, timeout = 1000) {
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
exports.isAnimatedGif = isAnimatedGif;
function isAnimatedGifStream(stream, timeout = 1000) {
    return __awaiter(this, void 0, void 0, function* () {
        const buffer = yield new Promise((resolve, reject) => {
            const _buf = Array();
            stream.on('data', (chunk) => _buf.push(chunk));
            stream.on('end', () => resolve(Buffer.concat(_buf)));
            stream.on('error', (err) => reject(`error converting stream - ${err}`));
        });
        return isAnimatedGif(buffer, timeout);
    });
}
exports.isAnimatedGifStream = isAnimatedGifStream;
//# sourceMappingURL=index.js.map