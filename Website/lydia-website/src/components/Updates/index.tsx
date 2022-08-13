import React, { useContext } from 'react';

import StatusContext from '../../config/StatusContext';

import UpdateOption from './UpdateOption'; 
import UpdateSubmit from './UpdateSubmit';

type Props = {
    
}

const Updates : React.FC<Props> = ({

}) => {
    const statusContext = useContext(StatusContext);
    const statusArray = statusContext.statusArray;
    const addStatus = statusContext.addStatus;

    const handleSubmit = (event: React.FormEvent) => {
        console.log(`${event} has started`);
        event.preventDefault();
    }

    return (
        <>
            {statusArray.map((status) => (
                <UpdateOption
                    {...status}
                />
            ))}
            <UpdateSubmit 
                onSubmit={handleSubmit}
             />
        </>
    );
};

export default Updates;