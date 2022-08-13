import { createContext } from 'react';

import Status from '../constants/Status';

type StatusContextType = {
    statusArray: Status[]
    addStatus: () => void;
    removeStatus: () => void;
}

const StatusContext = createContext<StatusContextType>({
    statusArray: [],
    addStatus: () => {},
    removeStatus: () => {},
});

export default StatusContext;
