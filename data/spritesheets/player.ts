import { SpritesheetData } from './types';

export const data: SpritesheetData = {
  frames: {
    constant: {
      frame: { x: 0, y: 0, w: 32, h: 32 },
      sourceSize: { w: 32, h: 32 },
      spriteSourceSize: { x: 0, y: 0 },
    }
  },
  meta: {
    scale: '0.5',
  },
  animations: {
    constant: ['constant']
  },
};
