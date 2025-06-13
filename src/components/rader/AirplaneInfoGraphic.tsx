import { Text } from 'pixi.js';
import { useRef } from 'react';
import { useRaderTick } from '../../hooks/useRaderTick';
import { AirplaneId } from '../../models/airplane';
import { raderInfo } from '../../models/rader';

export type AirplaneInfoGraphicProps = {
  id: AirplaneId,
};

export default function AirplaneInfoGraphic(props: AirplaneInfoGraphicProps) {
  const airplane = raderInfo.airplanes.find((airplane) => airplane.id === props.id);
  const ref = useRef<Text>(null);

  useRaderTick(() => {
    if (!ref.current || !airplane) {
      return;
    }
    ref.current.x = airplane.x;
    ref.current.y = airplane.y - 12;
  });

  return (
    <pixiText
      text={'SKY158 B738\nFL150 | 250'}
      anchor={{ x: 0.5, y: 1 }}
      alpha={0.6}
      style={{ fontSize: 11 }}
      ref={ref}
    />
  );
}
