import React from 'react'

type Props = {
    _id: number;
    text: string;
    author: string;
    createdAt: Date;
    createdWhere?: string;
};

const UpdateOption: React.FC<Props> = ({
    _id,
    text,
    author,
    createdAt,
    createdWhere
}) => {
    return (
        <div className="status-option">
            <li>
                {text}
            </li>
            <li>
                {author}
            </li>
            <li>
                {createdAt.toLocaleString()}
            </li>
            <li>
                {createdWhere}
            </li>
        </div>
    )
}

export default UpdateOption;