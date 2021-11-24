/// <reference types="node" />
import { Readable } from 'stream';
export declare function isAnimatedGif(buffer: Buffer, timeout?: number): boolean;
export declare function isAnimatedGifStream(stream: Readable, timeout?: number): Promise<boolean>;
