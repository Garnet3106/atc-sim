export type AirplaneId = string;

export type Airplane = {
  id: AirplaneId,
  x: number,
  y: number,
  heading: number,
  targetHeading: TargetHeading | null,
  landingClearance: LandingClearance | null,
};

export type TargetHeading = {
  direction: 'left' | 'right',
  to: TargetHeadingTo,
  reached: boolean,
};

export type TargetHeadingTo = {
  type: 'heading',
  heading: number,
} | {
  type: 'coordinates',
  x: number,
  y: number,
};

export function canonicalizeHeading(heading: number): number {
  return heading > 0 ? heading % 360 : (heading + 360) % 360;
}

export type LandingClearance = {
  runwayName: string,
};
