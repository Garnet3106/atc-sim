import { useState } from 'react';
import { AirplaneId, TargetHeading } from '../../models/airplane';
import { raderInfo } from '../../models/rader';

export default function Controller() {
  const [_rerenderingTrigger, setRerenderingTrigger] = useState(false);
  const [operationTarget, setOperationTarget] = useState<AirplaneId | null>(null);
  const [controllerHeading, setControllerHeading] = useState(0);
  console.log(controllerHeading);
  const flights = raderInfo.airplanes.map((airplane) => (
    <div
      className={'controller-flights-item' + (operationTarget === airplane.id ? ' controller-flights-item-selected' : '')}
      onClick={() => {
        setOperationTarget(airplane.id);
        setControllerHeading(airplane.heading);
      }}
      key={airplane.id}
    >
      SKY157 B738
      <br />
      {airplane.targetHeading ? stringifyTargetHeading(airplane.targetHeading) : airplane.heading} FL150 250KNTS
    </div>
  ));
  return (
    <div className='controller'>
      <div className='controller-flights'>
        {flights}
      </div>
      <div className='controller-panel'>
        {/* [todo] css書く */}
        <div className='control-panel-item'>
          <div className='control-panel-item-name'>
            HDG
          </div>
          <div className='control-panel-item-value'>
            <input type='range' min={0} max={359} value={controllerHeading} onChange={(event) => setControllerHeading(Number(event.currentTarget.value))} />
          </div>
        </div>
        <div className='control-panel-item-name'>
          SPD
        </div>
        <div className='control-panel-item-value'>
          <input type='range' min={14} max={30} />
        </div>
        <button onClick={confirm}>CONFIRM</button>
      </div>
    </div>
  );

  function confirm() {
    if (!operationTarget) {
      return;
    }
    const target = raderInfo.airplanes.find((airplane) => airplane.id === operationTarget);
    if (!target) {
      return;
    }
    target.targetHeading = {
      direction: 'right',
      to: {
        type: 'heading',
        heading: controllerHeading,
      },
      reached: false,
    };
    setRerenderingTrigger((state) => !state);
  }

  function stringifyTargetHeading(targetHeading: TargetHeading): string {
    switch (targetHeading.to.type) {
      case 'coordinates':
        return targetHeading.to.waypointName;

      case 'heading':
        return targetHeading.to.heading.toString();
    }
  }
}
