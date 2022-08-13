import React, { useState } from 'react';

import './main.scss';

type Props = {
    onSubmit: (event: React.FormEvent) => void;
};

const UpdateSubmit: React.FC<Props> = ({
    onSubmit
}) => {

    return (
        <div className="footer">
            <form onSubmit={onSubmit}>
                <input type="text" id="text" name="text" />
                <input type="text" id="author" name="author" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateSubmit;