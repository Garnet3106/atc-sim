export type RunwayId = string;

export type Runway = {
  id: RunwayId,
  beginName: string,
  beginDirection: number,
  beginX: number,
  beginY: number,
  endName: string,
  endDirection: number,
  endX: number,
  endY: number,
};
