import React, { useContext } from 'react';
import axios from 'axios';

import UpdateOption from './UpdateOption'; 
import UpdateSubmit from './UpdateSubmit';

import StatusContext from '../../contexts/StatusContext';
import { Status } from '../../constants/Status';
import { parseDateToISO } from '../../util/time';
import { generateID } from '../../util/guid';

import './main.scss';

const BASE_URL = "http://localhost:3001";
const ct = require('countries-and-timezones');

type Props = {
    onSubmit: (status: Status) => void;
}

const Updates : React.FC<Props> = ({
    onSubmit,
}) => {
    const statusArray = useContext(StatusContext);
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const country = ct.getCountriesForTimezone(tzid)[0].name;


    const handleSubmit = async (event: React.SyntheticEvent) => {
        const target = event.target as typeof event.target & {
            text: { value: string };
            author: { value: string };
        };
        const url = BASE_URL + "/api/statuses/add";
        axios.post(url, {
            id: generateID(),
            text: target.text.value, 
            author: target.author.value, 
            createdAt: parseDateToISO(tzid).slice(0, 19).replace('T', ' '), 
            country: country,
        }).then((response) => {
            const newStatus: Status = {
                _id: response.data._id,
                text: response.data.text,
                author: response.data.author,
                createdAt: new Date(response.data.createdAt),
                createdWhere: response.data.createdWhere,
            };
            onSubmit(newStatus);
        }).catch((error) => {
});

        event.preventDefault();
    }

    const handleDelete = (statusId : number) => {
    };

    return (
        <div className="updates-container">
            <div className="updates-container-statuses">
                {statusArray.map((status) => (
                    <UpdateOption
                        key={status._id}
                        status={status}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            <UpdateSubmit 
                onSubmit={handleSubmit}
             />
        </div>
    );
};

export default Updates;