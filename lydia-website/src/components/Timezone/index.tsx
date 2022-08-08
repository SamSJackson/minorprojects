import React, { useState, useEffect } from 'react';


import './main.scss'


type Props = {
    timeZone: string
}

const Timezone : React.FC<Props> = ({
    timeZone,
}) => {
    const [time, setTime] = useState<Date>(new Date()); 

    const refreshClock = () => {
        handleTimeZone(Date(), timeZone);
    };

    const handleTimeZone = (date : string, timeZone : string) => {
        const newTime = new Date(
            new Date(date).toLocaleString('en-GB', {
                timeZone,
            }),
        );

        setTime(newTime);
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (
        <div className="timezone-container">
            {time.toLocaleTimeString()}
        </div>
    )
}

export default Timezone;