import { ContactsItem } from "./";

function Contacts({ totalFriends, messageFilter, clickSetMessageFilter, currentUserId }) {
    return (
        <div className="contacts">
            <h4 className="contacts__title">Contacts</h4>
            {totalFriends.map((el) => {
                return <ContactsItem id={el.id} img={el.img} name={el.name} 
                lastName={el.lastName} key={el.id} clickSetMessageFilter={clickSetMessageFilter} messageFilter={messageFilter} 
                currentUserId={currentUserId} lastMessageText={el.lastMessageText} lastMessageTime={el.lastMessageTime} />
            })}
        </div>
    )
}

export default Contacts;



