import { Contacts, Chat } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { fetchMessages, fetchAddMessage, changeMessageText, fetchMessageFilter, fetchRandomMessagePhrase } from "../redux/actions/messages";
import { fetchFriends } from "../redux/actions/friends";
import { useParams } from "react-router-dom";

function Messages() {
    let { userId } = useParams();
    let dispatch = useDispatch();
    let { messages, currentMessageText, messageFilter, lastFriendsMessages } = useSelector(({ messages }) => messages);
    let { friends } = useSelector(({ friends }) => friends);
    let { currentUser } = useSelector(({ users }) => users);
    let clickAddMessage = (id, messages, currentMessageText, filterId ) => dispatch(fetchAddMessage(id, messages, currentMessageText, filterId ));
    let onChangeMessageText = (text) => dispatch(changeMessageText(text));
    let clickSetMessageFilter = (id, currentUserId) => dispatch(fetchMessageFilter(id, currentUserId));
    let totalFriends = () => friends.reduce((sum, el) => {
        let addEl = lastFriendsMessages.filter(e => e.id === el.id)
        return [...sum, {...el, ...addEl[0]}]
    },[]);
    let onFetchRandomMessagePhrase = () => dispatch(fetchRandomMessagePhrase()) 

    useEffect(() => {
        dispatch(fetchFriends(userId));
        dispatch(fetchMessages(userId));
    }, [dispatch, userId ])

    return (
        <section className="messages">
            <Contacts totalFriends={totalFriends()} clickSetMessageFilter={clickSetMessageFilter} messageFilter={messageFilter} currentUserId={userId} />
            <Chat messages={messages} currentMessageText={currentMessageText} clickAddMessage={clickAddMessage}
                onChangeMessageText={onChangeMessageText} currentUser={currentUser} userId={userId} messageFilter={messageFilter} onFetchRandomMessagePhrase={onFetchRandomMessagePhrase} />
        </section>
    )
}

export default Messages;