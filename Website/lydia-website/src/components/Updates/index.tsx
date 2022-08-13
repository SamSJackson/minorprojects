import React, { useContext } from 'react';

import StatusContext from '../../config/StatusContext';

import UpdateOption from './UpdateOption'; 

type Props = {
    
}

const Updates : React.FC<Props> = ({

}) => {
    const statusContext = useContext(StatusContext);
    const statusArray = statusContext.statusArray;

    return (
        <>
            {statusArray.map((status) => (
                <UpdateOption
                    {...status}
                />
            ))}
        </>
    );
};

export default Updates;