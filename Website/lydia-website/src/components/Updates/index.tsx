import React, { useContext } from 'react';
import axios from 'axios';

import UpdateOption from './UpdateOption'; 
import UpdateSubmit from './UpdateSubmit';

import StatusContext from '../../config/StatusContext';
import { Status } from '../../constants/Status';
import './main.scss';

const BASE_URL = "http://localhost:3001";
const ct = require('countries-and-timezones');

type Props = {
    
}

const Updates : React.FC<Props> = ({

}) => {

    const statusContext = useContext(StatusContext);
    const statusArray = statusContext.statusArray;
    const addStatus = statusContext.addStatus;
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const country = ct.getCountriesForTimezone(tzid)[0].name;


    const handleSubmit = async (event: React.SyntheticEvent) => {
        const target = event.target as typeof event.target & {
            text: { value: string};
            author: { value: string};
        };
        const text = target.text.value;
        const author = target.author.value;
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const url = BASE_URL + "/api/statuses/add";
        axios.post(url, {
            text: text, 
            author: author, 
            createdAt: createdAt, 
            country: country,
        }).then((response) => {
            const newStatus: Status = {
                _id: response.data._id,
                text: response.data.text,
                author: response.data.author,
                createdAt: new Date(response.data.createdAt),
                createdWhere: response.data.createdWhere,
            };
            addStatus(newStatus);
        }).catch((error) => {
        })


        event.preventDefault();
    }

    return (
        <div className="updates-container">
            <div className="updates-container-statuses">
                {statusArray.map((status) => (
                    <UpdateOption
                        key={status._id}
                        {...status}
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