import React, { useState } from 'react';

import './main.scss';

type Props = {
    onSubmit: (event: React.FormEvent) => void;
};

const UpdateSubmit: React.FC<Props> = ({
    onSubmit
}) => {

    return (
        <div className="updates-footer">
            <form onSubmit={onSubmit}>
            <div className="updates-footer-flex">
                <div className="updates-footer-flex-row">
                    <input type="text" id="author" name="author" placeholder="Name" />
                </div>
                <hr className="updates-footer-divider" />
                <div className="updates-footer-flex-row">
                    <div className="textarea" contentEditable="true" data-ph="What's going on"/>
                </div>
            </div>
            <div className="updates-footer-submit">
                <input type="submit" value="Submit" />
            </div>
            </form>
        </div>
    );
};

export default UpdateSubmit;