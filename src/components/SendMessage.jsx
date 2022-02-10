import React from "react";

function SendMessage({ onChangeMessageText, clickAddMessage, currentMessageText, id, messages, messageFilterId, onFetchRandomMessagePhrase }) {
    return (
        <div className="sendMessage">
            <div className="sendMessage__wrapper">
                <input placeholder="Type your message" type="text" value={currentMessageText} onChange={(e) => onChangeMessageText(e.target.value)} />
                {currentMessageText ? 
                <button onClick={() => clickAddMessage(+id, messages, currentMessageText, messageFilterId)} className="sendMessage__sendBtn">send</button>
                :
                <button className="sendMessage__sendBtn">send</button>
                }
                <button onClick={() => onFetchRandomMessagePhrase()} className="randomPhraseBtn">random phrase</button>
            </div>
        </div>
    )
}

export default SendMessage;