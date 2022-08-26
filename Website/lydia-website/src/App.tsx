import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Timezone from './components/Timezone';
import Updates from './components/Updates';
import { Status } from './constants/Status';
import StatusContext from './contexts/StatusContext';
import TimeContext from './contexts/TimeContex';
import { changeDateTimezone } from './util/time';

import './App.scss';

const BASE_URL = "http://localhost:3001/";
const londonTimezone = 'Europe/London';
const vancouverTimezone = 'America/Vancouver';


const App : React.FC = () => {
  const [status, setStatus] = useState<Status[]>([]);
  const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const url = BASE_URL + 'api/statuses';
    axios.get(url).then((response) => {
      const receivedStatusArray: Status[] = [];
      for (var i = 0; i < response.data.length; i++) {
        const transformedStatus: Status = {
          _id: response.data[i].id,
          text: response.data[i].text,
          author: response.data[i].author,
          createdAt: changeDateTimezone(response.data[i].createdAt, tzid),
          createdWhere: response.data[i].createdWhere,
        };
        receivedStatusArray.push(transformedStatus);
      }
      setStatus([...status, ...receivedStatusArray]);
    });
  }, []);

  const handleAddStatus = (newStatus: Status) => {
    console.log(newStatus._id);
    setStatus([...status, newStatus]);
  };

  return (
    <TimeContext.Provider value={tzid} >
      <StatusContext.Provider value={status}>
        <div className="app-container">
          <div className="flex-grid">
            <div className="col">
              <Timezone timeZone={londonTimezone} />
              <Timezone timeZone={vancouverTimezone} />
            </div>
            <div className="col">
              <Updates onSubmit={handleAddStatus} />
            </div>
          </div>
          <div className="sand-container" />
        </div>
      </StatusContext.Provider>
    </TimeContext.Provider>
  )
};

export default App;
