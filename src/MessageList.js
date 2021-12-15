import React from 'react';
import { useState } from 'react';

export default function MessageList(props){
    const [messageLst, setMessageLst] = useState([]);
    const handleAddMessage = (newMessage) =>
        setMessageLst((prevMessageList) => [...prevMessageList, newMessage])

    return (
        <div>
            {messageLst.map(({text, author}) =>
                (<div>
                    {author}, {text}
                </div>
            ))}
        </div>
    );
}
