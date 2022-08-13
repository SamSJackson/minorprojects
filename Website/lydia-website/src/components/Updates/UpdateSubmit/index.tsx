import React from 'react'

type Props = {
    onSubmit: (event: React.FormEvent) => void;
};

const UpdateSubmit: React.FC<Props> = ({
    onSubmit
}) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" id="text" />
                <input type="text" id="author" />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default UpdateSubmit;