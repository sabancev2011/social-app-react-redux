import axios from "axios"

export let SET_MESSAGES = "SET_MESSAGES";
export let ADD_MESSAGE = "ADD_MESSAGE";
export let CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";
export let SET_MESSAGE_FILTER = "SET_FILTER";
export let SET_LAST_FRIENDS_MESSAGES = "SET_LAST_FRIENDS_MESSAGES";
export let SET_RANDOM_MESSAGE_PHRASE = "SET_RANDOM_MESSAGE_PHRASE";

export let setMessages = (messages) => ({ type: SET_MESSAGES, messages });
export let addMessage = (message) => ({ type: ADD_MESSAGE, message });
export let changeMessageText = (text) => ({ type: CHANGE_MESSAGE_TEXT, text });
export let setMessageFilter = (id, messages) => ({ type: SET_MESSAGE_FILTER, id, messages });
export let setLastFriendsMessages = (messages) => ({ type: SET_LAST_FRIENDS_MESSAGES, messages });
export let setRandomMessagePhrase = (phrase) => ({ type: SET_RANDOM_MESSAGE_PHRASE, phrase });

export let fetchMessages = (userId) => async (dispatch) => {
    let { data: { messages } } = await axios.get(`/messages/${userId}`)
    let friendsMessages = () => messages.filter(el => el.userId !== +userId)
    dispatch(setLastFriendsMessages(friendsMessages()));
    dispatch(setMessages(messages));
}
export let fetchAddMessage = (id, messages, currentMessageText, filterId) => async (dispatch) => {
    let currentUserData = await axios.get(`/users/${id}`)
    await axios.put(`/messages/${id}`, {
        id: id,
        messages: [...messages, {
            messageId: messages.length + 1,
            userId: id,
            sendTo: filterId,
            name: currentUserData.data.name,
            lastName: currentUserData.data.lastName,
            img: currentUserData.data.img,
            messageText: currentMessageText,
            currentMessageTime: new Date().toString().substr(4, 21)
        }]
    })
    let userData = await axios.get(`/messages/${filterId}`)
    await axios.put(`/messages/${filterId}`, {
        id: filterId,
        messages: [...userData.data.messages, {
            messageId: userData.data.messages.length + 1,
            userId: id,
            name: currentUserData.data.name,
            lastName: currentUserData.data.lastName,
            img: currentUserData.data.img,
            messageText: currentMessageText,
            currentMessageTime: new Date().toString().substr(4, 21)
        }]
    })
    dispatch(addMessage({
        messageId: messages.length + 1,
        userId: id,
        sendTo: filterId,
        name: currentUserData.data.name,
        lastName: currentUserData.data.lastName,
        img: currentUserData.data.img,
        messageText: currentMessageText,
        currentMessageTime: new Date().toString().substr(4, 21)
    }))
}

export let fetchMessageFilter = (id, currentUserId) => async (dispatch) => {
    let { data: [{ messages }] } = await axios.get(`/messages?id=${currentUserId}`);
    let messageFilter = () => [...messages].filter((el) => +el.userId === id || +el.sendTo === id);
    dispatch(setMessageFilter(id, messageFilter()));
}

export let fetchRandomMessagePhrase = () => async (dispatch) => {
    let { data: { text } } = await axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`);
    dispatch(setRandomMessagePhrase(text))
}