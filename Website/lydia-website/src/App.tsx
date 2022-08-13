import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Timezone from './components/Timezone';
import Updates from './components/Updates';
import { Status } from './constants/Status';
import StatusContext, { StatusContextType } from './config/StatusContext';

import './App.scss';

const BASE_URL = "http://localhost:3001/";
const londonTimezone = 'Europe/London';
const vancouverTimezone = 'America/Vancouver';


const App : React.FC = () => {

  
  const [status, setStatus] = useState<StatusContextType>({
    statusArray: [],
    addStatus: (argument: Status) => {},
    removeStatus: () => {},
  });

  useEffect(() => {
    const url = BASE_URL + 'api/statuses';
    axios.get(url).then((response) => {
      const receivedStatusArray: Status[] = [];
      for (var i = 0; i < response.data.length; i++) {
        const transformedStatus: Status = {
          _id: response.data[i]._id,
          text: response.data[i].text,
          author: response.data[i].author,
          createdAt: response.data[i].createdAt,
          createdWhere: response.data[i].createdWhere,
        };
        receivedStatusArray.push(transformedStatus);
      }
      setStatus({
        statusArray: receivedStatusArray,
        addStatus: handleAddStatus,
        removeStatus: handleRemoveStatus,
      })
    });
  }, []);

  const handleAddStatus = (newStatus: Status) => {
    setStatus({
      statusArray: status.statusArray.concat([newStatus]),
      addStatus: status.addStatus,
      removeStatus: status.removeStatus,
    });
  };

  const handleRemoveStatus = () => {};

  return (
    <StatusContext.Provider value={status}>
      <div className="app-container">
        <div className="flex-grid">
          <div className="col">
            <Timezone timeZone={londonTimezone} />
            <Timezone timeZone={vancouverTimezone} />
          </div>
          <div className="col">
            <Updates />
          </div>
        </div>
      </div>
    </StatusContext.Provider>
  )
};

export default App;
