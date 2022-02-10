import { SET_MESSAGES, CHANGE_MESSAGE_TEXT, ADD_MESSAGE, SET_MESSAGE_FILTER, SET_LAST_FRIENDS_MESSAGES, SET_RANDOM_MESSAGE_PHRASE } from "../actions/messages";

let initialState = {
    messages: [],
    messageFilter: {
        id: false,
        messages: [],
    },
    currentMessageText: "",
    lastFriendsMessages: [],
    messagePage: 1,
    messagePageCount: [],
}

let messages = (state = initialState, action) => {

    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                currentMessageText: action.text,
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message],
                messageFilter: {
                    ...state.messageFilter,
                    messages: [...state.messageFilter.messages, action.message]
                },
                currentMessageText: "",
            }
        case SET_MESSAGE_FILTER:
            return {
                ...state,
                messageFilter: {
                    id: action.id,
                    messages: action.messages
                }
            }
        case SET_LAST_FRIENDS_MESSAGES:
            return {
                ...state,
                lastFriendsMessages: action.messages.reduce((sum, el) => {
                    sum = sum.filter(e => e.id !== el.userId);
                    return [...sum, { id: el.userId, lastMessageTime: el.currentMessageTime, lastMessageText: el.messageText }]
                }, [])
            }
            case SET_RANDOM_MESSAGE_PHRASE:
            return {
                ...state,
                currentMessageText: action.phrase
            }
        default:
            return state
    }
}

export default messages