import { Airplane } from './airplane';
import { Runway } from './runway';

export type RaderInfo = {
  airplanes: Airplane[],
  runways: Runway[],
};

export let raderInfo: RaderInfo = {
  airplanes: [
    { id: 'a', callsign: 'JL', flightNumber: 111, x: 100, y: 100, heading: 180, targetHeading: null, landingClearance: null },
    { id: 'b', callsign: 'NH', flightNumber: 222, x: 200, y: 100, heading: 350, targetHeading: { direction: 'right', to: { type: 'heading', heading: 180 }, reached: false }, landingClearance: null },
    { id: 'c', callsign: 'JL', flightNumber: 333, x: 300, y: 200, heading: 0, targetHeading: { direction: 'right', to: { type: 'coordinates', waypointName: 'WP', x: 0, y: 0 }, reached: false }, landingClearance: null },
  ],
  runways: [
    { id: 'r1', beginName: '32', beginDirection: 320, beginX: 100, beginY: 100, endName: '14', endDirection: 140, endX: 130, endY: 115 },
    { id: 'r2', beginName: '29', beginDirection: 290, beginX: 300, beginY: 200, endName: '11', endDirection: 110, endX: 305, endY: 220 },
  ],
};
