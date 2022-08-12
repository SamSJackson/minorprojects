import React, { useState, useEffect } from 'react';


import './main.scss'


type Props = {
    timeZone: string
}

const Timezone : React.FC<Props> = ({
    timeZone,
}) => {

    const [time, setTime] = useState<string>(
        new Date().toLocaleTimeString("en-GB", {timeZone})
    );

    const refreshClock = () => {
        handleTimeZone(Date(), timeZone);
    };

    const handleTimeZone = (date : string, timeZone : string) => {
        const newTime = new Date(
            new Date(date).toLocaleString('en-GB', {
                timeZone,
            }),
        );

        setTime(newTime.toLocaleTimeString());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (
        <div className="timezone-container">
            {time}
        </div>
    )
}

export default Timezone;