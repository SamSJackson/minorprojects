import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import Timezone from './components/Timezone';
import Updates from './components/Updates';
import Status from './constants/Status';
import StatusContext from './config/StatusContext';

import './App.scss';

const BASE_URL = "http://localhost:3001/";
const londonTimezone = 'Europe/London';
const vancouverTimezone = 'America/Vancouver';

type StatusContextType = {
  statusArray: Status[]
  addStatus: () => void;
  removeStatus: () => void;
}

const App : React.FC = () => {
  const handleAddStatus = () => {};
  const handleRemoveStatus = () => {};

  const [status, setStatus] = useState<StatusContextType>({
    statusArray: [],
    addStatus: handleAddStatus,
    removeStatus: handleRemoveStatus,
  });

  useEffect(() => {
    const url = BASE_URL + 'api/statuses';
    axios.get(url).then((response) => {
      const receivedstatusArray: Status[] = [];
      for (var i = 0; i < response.data.length; i++) {
        const transformedStatus: Status = {
          _id: response.data[i]._id,
          text: response.data[i].text,
          author: response.data[i].author,
          createdAt: response.data[i].createdAt,
          createdWhere: response.data[i].createdWhere,
        };
        receivedstatusArray.push(transformedStatus);
      }
      setStatus({
        statusArray : receivedstatusArray,
        addStatus: handleAddStatus,
        removeStatus: handleRemoveStatus,
      });
    })
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
        <Updates />
      </div>
    </StatusContext.Provider>
  )
};

export default App;
