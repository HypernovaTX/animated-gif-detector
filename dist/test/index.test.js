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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const index_1 = require("../index");
//import stream from 'stream';
const http_1 = __importDefault(require("http"));
const testBuffer = Buffer.alloc(0);
test('Ensure it is working with any buffer', () => {
    expect((0, index_1.isAnimatedGif)(testBuffer)).toBe(false);
});
test('Animated - example.gif', () => {
    const file = path_1.default.resolve('./test/files/example.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(true);
});
test('Not animated - GifSample.gif', () => {
    const file = path_1.default.resolve('./test/files/GifSample.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - Quilt_design_as_46x46_uncompressed_GIF.gif', () => {
    const file = path_1.default.resolve('./test/files/Quilt_design_as_46x46_uncompressed_GIF.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Animated - SmallFullColourGIF.gif', () => {
    const file = path_1.default.resolve('./test/files/SmallFullColourGIF.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(true);
});
test('Not animated - Sunflower_as_gif_websafe.gif', () => {
    const file = path_1.default.resolve('./test/files/Sunflower_as_gif_websafe.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - postcard.gif', () => {
    const file = path_1.default.resolve('./test/files/postcard.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - 1E3A0FFF2F0ED7F3DD8DAE5CC461494E.gif', () => {
    const file = path_1.default.resolve('./test/files/1E3A0FFF2F0ED7F3DD8DAE5CC461494E.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - 09_24_14_Better_Together_GC_Event_FD.gif', () => {
    const file = path_1.default.resolve('./test/files/09_24_14_Better_Together_GC_Event_FD.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - 21.gif', () => {
    const file = path_1.default.resolve('./test/files/21.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - calendar_265x230.gif', () => {
    const file = path_1.default.resolve('./test/files/calendar_265x230.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - 2026556_rw_nl_160X250.gif', () => {
    const file = path_1.default.resolve('./test/files/2026556_rw_nl_160X250.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - connections.gif', () => {
    const file = path_1.default.resolve('./test/files/connections.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - block-7.gif', () => {
    const file = path_1.default.resolve('./test/files/block-7.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - PSP14_728-x-90_HOUZZ.gif', () => {
    const file = path_1.default.resolve('./test/files/PSP14_728-x-90_HOUZZ.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - daily-idea-header.gif', () => {
    const file = path_1.default.resolve('./test/files/daily-idea-header.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - b_cc_email14.gif', () => {
    const file = path_1.default.resolve('./test/files/b_cc_email14.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - generic-header.gif', () => {
    const file = path_1.default.resolve('./test/files/generic-header.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Animated - colbert.gif', () => {
    const file = path_1.default.resolve('./test/files/colbert.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(true);
});
test('Non GIF - Physical-Representations-of-Data.png', () => {
    const file = path_1.default.resolve('./test/files/Physical-Representations-of-Data.png');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Not animated - large-size-not-animated.gif', () => {
    const file = path_1.default.resolve('./test/files/large-size-not-animated.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(false);
});
test('Animated - large-size-animated.gif', () => {
    const file = path_1.default.resolve('./test/files/large-size-animated.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(true);
});
test('Animated - large-res-animated.gif', () => {
    const file = path_1.default.resolve('./test/files/large-res-animated.gif');
    const buffer = fs_1.default.readFileSync(file);
    expect((0, index_1.isAnimatedGif)(buffer)).toBe(true);
});
test('Animated (stream) - SmallFullColourGIF.gif', () => __awaiter(void 0, void 0, void 0, function* () {
    const file = path_1.default.resolve('./test/files/SmallFullColourGIF.gif');
    const stream = fs_1.default.createReadStream(file);
    const result = yield (0, index_1.isAnimatedGifStream)(stream);
    expect(result).toBe(true);
}));
test('Not animated (stream) - Sunflower_as_gif_websafe.gif', () => __awaiter(void 0, void 0, void 0, function* () {
    const file = path_1.default.resolve('./test/files/Sunflower_as_gif_websafe.gif');
    const stream = fs_1.default.createReadStream(file);
    const result = yield (0, index_1.isAnimatedGifStream)(stream);
    expect(result).toBe(false);
}));
test('Not animated (stream) - large-size-not-animated.gif', () => __awaiter(void 0, void 0, void 0, function* () {
    const file = path_1.default.resolve('./test/files/large-size-not-animated.gif');
    const stream = fs_1.default.createReadStream(file);
    const result = yield (0, index_1.isAnimatedGifStream)(stream);
    expect(result).toBe(false);
}));
test('Animated (stream) - large-size-animated.gif', () => __awaiter(void 0, void 0, void 0, function* () {
    const file = path_1.default.resolve('./test/files/large-size-animated.gif');
    const stream = fs_1.default.createReadStream(file);
    const result = yield (0, index_1.isAnimatedGifStream)(stream);
    expect(result).toBe(true);
}));
test('Animated (stream) - large-res-animated.gif', () => __awaiter(void 0, void 0, void 0, function* () {
    const file = path_1.default.resolve('./test/files/large-res-animated.gif');
    const stream = fs_1.default.createReadStream(file);
    const result = yield (0, index_1.isAnimatedGifStream)(stream);
    expect(result).toBe(true);
}));
test('Animated (stream web) - http://smb3a.weebly.com/uploads/1/0/0/7/1007956/7027030.gif', () => __awaiter(void 0, void 0, void 0, function* () {
    http_1.default.get('http://smb3a.weebly.com/uploads/1/0/0/7/1007956/7027030.gif', (res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.isAnimatedGifStream)(res);
        expect(result).toBe(true);
    }));
}));
//# sourceMappingURL=index.test.js.map