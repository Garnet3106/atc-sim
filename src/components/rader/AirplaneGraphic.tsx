import { Assets, Sprite, Texture } from 'pixi.js';
import { useEffect, useRef, useState } from 'react';
import { useRaderTick } from '../../hooks/useRaderTick';
import { AirplaneId } from '../../models/airplane';
import { raderInfo } from '../../models/rader';

export type AirplaneGraphicProps = {
  id: AirplaneId,
};

export default function AirplaneGraphic(props: AirplaneGraphicProps) {
  const airplane = raderInfo.airplanes.find((airplane) => airplane.id === props.id);
  const ref = useRef<Sprite>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load('/assets/airplane.png').then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  useRaderTick(() => {
    if (!ref.current || !airplane) {
      return;
    }
    ref.current.x = airplane.x;
    ref.current.y = airplane.y;
    ref.current.angle = airplane.heading;
  });

  return (
    <pixiSprite
      texture={texture}
      anchor={0.5}
      scale={0.13}
      ref={ref}
    />
  );
}
