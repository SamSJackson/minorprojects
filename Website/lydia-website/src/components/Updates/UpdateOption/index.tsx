import React, { useState, useContext } from 'react';

import { Status } from '../../../constants/Status';
import TimeContext from '../../../contexts/TimeContex';
import { formatTime } from '../../../util/time';

import './main.scss';

type Props = {
    status: Status,
    onDelete: (status : number) => void,
};

const UpdateOption: React.FC<Props> = ({
    status,
    onDelete,
}) => {
    const createdAt = formatTime(status.createdAt);

    return (
        <div className="status-option">
            <div className="status-option-header">
                <div>
                    {status.author}     
                </div>
                <div>
                    {createdAt}
                </div>
            </div>
            <hr className="status-option-divider" />
            <div className="status-option-body">
                {status.text}
            </div>
        </div>
    )
}

export default UpdateOption;