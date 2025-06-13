import { Application, extend, useTick } from '@pixi/react';
import { Container, Sprite } from 'pixi.js';
import { addElapsedTime } from '../hooks/useRaderTick';
import { raderInfo } from '../raderInfo';
import AirplaneGraphic from './rader/AirplaneGraphic';

extend({
  Container,
  Sprite,
});

export default function App() {
  return (
    <Application background='#ffffff' resizeTo={window}>
      <RaderMap />
    </Application>
  );
}

function RaderMap() {
  useTick((ticker) => {
    addElapsedTime(ticker.deltaTime);
  });

  useTick((ticker) => {
    raderInfo.airplanes = raderInfo.airplanes.map((airplane) => {
      airplane.y -= ticker.deltaTime * 0.1;
      return airplane;
    });
  });

  return (
    <>
      {raderInfo.airplanes.map((airplane) => <AirplaneGraphic id={airplane.id} key={airplane.id} />)}
    </>
  );
}
