import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text } from 'pixi.js';
import RaderMap from './rader/RaderMap';
import { useRef } from 'react';
import './App.css';
import Controller from './layout/Controller';
import MessageTable from './layout/MessageTable';

extend({
  Container,
  Graphics,
  Sprite,
  Text,
});

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className='wrapper'>
      <div>
        <div className='rader' ref={ref}>
          <Application background='#f6f6fa' resizeTo={ref}>
            <RaderMap />
          </Application>
        </div>
        <MessageTable />
      </div>
      <Controller />
    </div>
  );
}
