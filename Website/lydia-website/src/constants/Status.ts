type Status = {
    _id: number;
    text: string;
    author: string;
    createdAt: Date;
    createdWhere?: string;
}

export default Status;