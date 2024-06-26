import { optimize } from 'svgo';

export {};

const ctx: Worker = self as any;
ctx.addEventListener('message', (event) => {
  const compressedSvg = optimize(event.data);

  postMessage(compressedSvg.data);
});
