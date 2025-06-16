import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text } from 'pixi.js';
import RaderMap from './rader/RaderMap';
import { useRef } from 'react';
import './App.css';
import { raderInfo } from '../models/rader';
import { TargetHeading } from '../models/airplane';

extend({
  Container,
  Graphics,
  Sprite,
  Text,
});

function stringifyTargetHeading(targetHeading: TargetHeading): string {
  switch (targetHeading.to.type) {
    case 'coordinates':
      return '<WYP>';

    case 'heading':
      return targetHeading.to.heading.toString();
  }
}

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const flights = raderInfo.airplanes.map((airplane) => (
    <div className="controller-flights-item">
      SKY157 B738
      <br />
      {airplane.targetHeading ? stringifyTargetHeading(airplane.targetHeading) : airplane.heading} FL150 250KNTS
    </div>
  ));
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
            <div className="message-item-target">
              SKY157 ➔ TWR
            </div>
            <div className="message-item-text">
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className="message-item-target">
              TWR ➔ SKY157
            </div>
            <div className="message-item-text">
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className="message-item-target">
              SKY157 ➔ TWR
            </div>
            <div className="message-item-text">
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className="message-item-target">
              TWR ➔ SKY157
            </div>
            <div className="message-item-text">
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className="message-item-target">
              SKY157 ➔ TWR
            </div>
            <div className="message-item-text">
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className="message-item-target">
              TWR ➔ SKY157
            </div>
            <div className="message-item-text">
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className="message-item-target">
              SKY157 ➔ TWR
            </div>
            <div className="message-item-text">
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className="message-item-target">
              TWR ➔ SKY157
            </div>
            <div className="message-item-text">
              RWY9, cleared for takeoff.
            </div>
          </div>
          <div className='message-item message-item-pilot'>
            <div className="message-item-target">
              SKY157 ➔ TWR
            </div>
            <div className="message-item-text">
              RWY9, ready for takeoff.
            </div>
          </div>
          <div className='message-item message-item-control'>
            <div className="message-item-target">
              TWR ➔ SKY157
            </div>
            <div className="message-item-text">
              RWY9, cleared for takeoff.
            </div>
          </div>
        </div>
      </div>
      <div className="controller">
        <div className="controller-flights">
          {flights}
        </div>
        <div className="controller-panel">
          
        </div>
      </div>
    </div>
  );
}
