import React from 'react';
import './App.scss';

import Timezone from './components/Timezone';

type Props = {

};

const App : React.FC<Props> = ({

}) => {
  const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="app-container">
      Hello World!
      <Timezone 
        timeZone={tzid}
      />
    </div>
  )
};

export default App;
