import { useTick } from '@pixi/react';
import { addElapsedTime } from '../../hooks/useRaderTick';
import { raderInfo } from '../../models/rader';
import AirplaneGraphic from './../rader/AirplaneGraphic';
import { canonicalizeHeading } from '../../models/airplane';
import AirplaneInfoGraphic from './AirplaneInfoGraphic';
import RunwayGraphic from './RunwayGraphic';

export default function RaderMap() {
  useTick((ticker) => {
    addElapsedTime(ticker.deltaTime);
  });

  useTick((ticker) => {
    raderInfo.airplanes = raderInfo.airplanes.map((airplane) => {
      const moveDistance = ticker.deltaTime * 0.015;
      const rotationDiff = ticker.deltaTime * 0.05;

      if (airplane.targetHeading && !airplane.targetHeading.reached) {
        const actualRotationDiff = airplane.targetHeading.direction === 'right' ? rotationDiff : -rotationDiff;
        let targetHeading = 0;
        if (airplane.targetHeading.to.type === 'heading') {
          targetHeading = airplane.targetHeading.to.heading;
        }
        if (airplane.targetHeading.to.type === 'coordinates') {
          const xDiff = airplane.targetHeading.to.x - airplane.x;
          const yDiff = airplane.targetHeading.to.y - airplane.y;
          targetHeading = canonicalizeHeading(Math.atan(xDiff / -yDiff) * (180 / Math.PI));
        }
        const nextHeading = canonicalizeHeading(airplane.heading + actualRotationDiff);

        // 旋回終了間際 (±5°) かどうか
        const reaching =
          (airplane.targetHeading.direction === 'right' && airplane.heading <= targetHeading + 5) ||
          (airplane.targetHeading.direction === 'left' && airplane.heading >= targetHeading - 5);
        if (reaching) {
          // 旋回終了判定; 旋回終了間際の場合のみ終了判定を行う
          const reached =
            (airplane.targetHeading.direction === 'right' && nextHeading >= targetHeading) ||
            (airplane.targetHeading.direction === 'left' && nextHeading <= targetHeading);
          if (reached) {
            airplane.heading = targetHeading;
            airplane.targetHeading.reached = true;
          } else {
            airplane.heading = nextHeading;
          }
        } else {
          airplane.heading = nextHeading;
        }
      }
      airplane.x += moveDistance * Math.sin(airplane.heading * (Math.PI / 180));
      airplane.y -= moveDistance * Math.cos(airplane.heading * (Math.PI / 180));
      return airplane;
    });
  });

  return (
    <>
      {raderInfo.airplanes.map((airplane) => <AirplaneGraphic id={airplane.id} key={'airplane_' + airplane.id} />)}
      {raderInfo.airplanes.map((airplane) => <AirplaneInfoGraphic id={airplane.id} key={'airplane_' + airplane.id + '_info'} />)}
      {raderInfo.runways.map((runway) => <RunwayGraphic id={runway.id} key={'runway_' + runway.id} />)}
    </>
  );
}
