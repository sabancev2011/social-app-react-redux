import { Link } from "react-router-dom";

function ProfileFriendItem({id, img, name, lastName}){
    return(
        <Link to={`/profile/${id}`} className="profileFriendItem"><img src={img} alt={name} />
        <p>{`${name} ${lastName}`}</p>
    </Link>
    )
}

export default ProfileFriendItem;