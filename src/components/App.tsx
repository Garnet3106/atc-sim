import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text } from 'pixi.js';
import RaderMap from './rader/RaderMap';
import { useRef } from 'react';
import './App.css';

extend({
  Container,
  Graphics,
  Sprite,
  Text,
});

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
    <div className='rader' ref={ref}>
      <Application background='#f6f6fa' resizeTo={ref}>
        <RaderMap />
      </Application>
    </div>
    </>
  );
}
