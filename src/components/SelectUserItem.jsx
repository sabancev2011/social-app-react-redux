import { Link } from "react-router-dom";

let SelectUserItem = ({ user, onSelectUser }) => {
    return (
        <div onClick={() => onSelectUser(user)} className="selectUserItem">
            <Link to={`/profile/${user.id}`}>
            <img className="selectUserItem__img" src={user.img} alt={user.name} />
            <p className="selectUserItem__name">{`${user.name} ${user.lastName}`}</p>
            </Link>
        </div>
    )
}

export default SelectUserItem;