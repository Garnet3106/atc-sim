import { raderInfo } from '../../models/rader';
import { RunwayId } from '../../models/runway';

export type RunwayGraphicProps = {
  id: RunwayId,
};

export default function RunwayGraphic(props: RunwayGraphicProps) {
  const runway = raderInfo.runways.find((runway) => runway.id === props.id);

  if (!runway) {
    return;
  }

  return (
    <>
    <pixiGraphics
      draw={(graphics) => {
        if (!runway) {
          return;
        }
        graphics.clear();
        graphics.strokeStyle = { color: 'black', width: 2 };
        graphics.beginPath();
        graphics.moveTo(0, 0);
        graphics.lineTo(runway.endX - runway.beginX, runway.endY - runway.beginY);
        graphics.closePath();
        graphics.stroke();
      }}
      alpha={0.2}
      x={runway.beginX}
      y={runway.beginY}
    />
    <pixiText
      text={runway.beginName}
      x={runway.beginX}
      y={runway.beginY}
      anchor={0.5}
      style={{ fontSize: 11 }}
    />
    <pixiText
      text={runway.endName}
      x={runway.endX}
      y={runway.endY}
      anchor={0.5}
      style={{ fontSize: 11 }}
    />
    </>
  );
}
