import React, { createContext, useState, useEffect } from 'react';
import './App.scss';

import Timezone from './components/Timezone';
import Status from './constants/Status';

const StatusContext = createContext<Status[]>([]);

const App : React.FC = () => {
  const londonTimezone = 'Europe/London';
  const vancouverTimezone = 'America/Vancouver';
  const [status, setStatus] = useState<Status[]>([]);

  useEffect(() => {
    setStatus([]);
  }, []);

  return (
    <StatusContext.Provider value={status}>
      <div className="app-container">
        <Timezone 
          timeZone={londonTimezone}
        />
        <Timezone 
          timeZone={vancouverTimezone}
        />
      </div>
    </StatusContext.Provider>
  )
};

export default App;
