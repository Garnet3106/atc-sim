import { Airplane } from './models/airplane';

export type RaderInfo = {
  airplanes: Airplane[],
};

export let raderInfo: RaderInfo = {
  airplanes: [
    { id: 'a', x: 100, y: 100, heading: 0 },
    { id: 'b', x: 200, y: 100, heading: 0 },
    { id: 'c', x: 300, y: 200, heading: 0 },
  ],
};
