export default function MessageTable() {
  return (
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
    </div>
  );
}
