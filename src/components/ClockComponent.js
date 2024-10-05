import React, { useState, useEffect } from 'react';
import '../styles/clocks.css';

const ClockComponent = ({ id, name, timezoneOffset, onRemove }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const localTime = new Date(now.getTime() + timezoneOffset * 3600 * 1000);
      setTime(localTime.toLocaleTimeString());
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(intervalId);
  }, [timezoneOffset]);

  return (
    <div className="clock-container">
      <span className="clock-name">
        {name}: {time}
      </span>
      <button className="remove-button" onClick={() => onRemove(id)}>
        Удалить
      </button>
    </div>
  );
};

export default ClockComponent;
