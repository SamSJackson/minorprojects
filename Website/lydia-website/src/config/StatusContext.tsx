import { createContext } from 'react';

import { Status } from '../constants/Status';

type StatusContextType = {
    statusArray: Status[];
    addStatus: (argument: Status) => void;
    removeStatus: () => void;
}

const StatusContext = createContext<StatusContextType>({
    statusArray: [],
    addStatus: (argument) => {},
    removeStatus: () => {},
});

export default StatusContext;

export type { StatusContextType };
