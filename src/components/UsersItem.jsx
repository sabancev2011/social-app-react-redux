import { Link } from "react-router-dom";

let UsersItem = ({ currentUser, clickAddFriend, friends, clickDeleteFriend, user }) => {

    return (
        <div className="usersItem">
            <Link to={`/profile/${user.id}`}>
                <img className="usersItem__img" src={user.img} alt={user.name} />
                <p className="usersItem__name">{`${user.name} ${user.lastName}`}</p>
            </Link>

            {friends.map(friend => friend.id).includes(user.id) ? 
            <button onClick={() => clickDeleteFriend(friends, currentUser.id, user.id)
            } className="usersItem__btn unfollow">unfollow</button>

                : <button onClick={() => clickAddFriend(friends, currentUser, user)
                } className="usersItem__btn">follow</button>
            }
        </div>
    )
}

export default UsersItem;

