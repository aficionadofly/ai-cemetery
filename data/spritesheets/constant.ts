import { SpritesheetData } from './types';

export const data: SpritesheetData = {
  frames: {
    constant: {
      frame: { x: 0, y: 0, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    }
  },
  meta: {
    scale: '1',
  },
  animations: {
    constant: ['constant']
  },
};
