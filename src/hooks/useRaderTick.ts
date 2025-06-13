import { useTick } from '@pixi/react';
import { useRef } from 'react';

const drawingInterval = 80;
let elapsedTime = 0;
let latestDrawingTime: number[] = [];

export function addElapsedTime(deltaTime: number) {
  elapsedTime += deltaTime;
}

export function useRaderTick(callback: () => void) {
  const drawingIdRef = useRef(latestDrawingTime.length);
  latestDrawingTime.push(0);
  callback();
  useTick(() => {
    if (elapsedTime >= latestDrawingTime[drawingIdRef.current] + drawingInterval) {
      latestDrawingTime[drawingIdRef.current] = elapsedTime;
      callback();
    }
  });
}
