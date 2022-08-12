import React from 'react';
import './App.scss';

import Timezone from './components/Timezone';

type Props = {

};

const App : React.FC<Props> = ({

}) => {
  const londonTimezone = 'Europe/London';
  const vancouverTimezone = 'America/Vancouver';

  return (
    <div className="app-container">
      <Timezone 
        timeZone={londonTimezone}
      />
      <Timezone 
        timeZone={vancouverTimezone}
      />
    </div>
  )
};

export default App;
