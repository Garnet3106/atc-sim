import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text } from 'pixi.js';
import RaderMap from './rader/RaderMap';
import { useRef } from 'react';
import './App.css';
import Controller from './layout/Controller';

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
        <div className='messages'>
          <div className='message-item message-item-pilot'>
            <div className='message-item-target'>
              SKY157 ➔ TWR
            </div>
            <div className='message-item-text'>
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className='message-item-target'>
              TWR ➔ SKY157
            </div>
            <div className='message-item-text'>
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className='message-item-target'>
              SKY157 ➔ TWR
            </div>
            <div className='message-item-text'>
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className='message-item-target'>
              TWR ➔ SKY157
            </div>
            <div className='message-item-text'>
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className='message-item-target'>
              SKY157 ➔ TWR
            </div>
            <div className='message-item-text'>
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className='message-item-target'>
              TWR ➔ SKY157
            </div>
            <div className='message-item-text'>
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className='message-item-target'>
              SKY157 ➔ TWR
            </div>
            <div className='message-item-text'>
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className='message-item-target'>
              TWR ➔ SKY157
            </div>
            <div className='message-item-text'>
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className='message-item-target'>
              SKY157 ➔ TWR
            </div>
            <div className='message-item-text'>
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className='message-item-target'>
              TWR ➔ SKY157
            </div>
            <div className='message-item-text'>
              RWY9, cleared for takeoff.
            </div>
          </div>
        </div>
      </div>
      <Controller />
    </div>
  );
}
