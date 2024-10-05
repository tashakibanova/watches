import React, { useState } from 'react';
import ClockComponent from './ClockComponent';
import '../styles/clocks.css';

const WorldClocks = () => {
  const [clocks, setClocks] = useState([]);
  const [clockName, setClockName] = useState('');
  const [timezoneOffset, setTimezoneOffset] = useState(0);

  const addClock = () => {
    if (clockName.trim() === '') return;  // Проверка на пустое имя
    setClocks([
      ...clocks,
      { id: Date.now(), name: clockName, timezoneOffset: timezoneOffset },
    ]);
    setClockName('');
    setTimezoneOffset(0);
  };

  const removeClock = (id) => {
    setClocks(clocks.filter(clock => clock.id !== id));
  };

  return (
    <div className="world-clocks">
      <h2>World Clocks</h2>
      <div className="add-clock-form">
        <input
          type="text"
          placeholder="Название"
          value={clockName}
          onChange={(e) => setClockName(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Временная зона (смещение UTC)"
          value={timezoneOffset}
          onChange={(e) => setTimezoneOffset(Number(e.target.value))}
          className="input-field"
        />
        <button onClick={addClock} className="add-button">Добавить</button>
      </div>

      <div className="clock-list">
        {clocks.map((clock) => (
          <ClockComponent
            key={clock.id}
            id={clock.id}
            name={clock.name}
            timezoneOffset={clock.timezoneOffset}
            onRemove={removeClock}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldClocks;
