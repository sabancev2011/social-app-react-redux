import { Link } from "react-router-dom";
import { Icons } from "./";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classNames from "classnames";

function Sidebar() {
    let { page } = useParams();
    let { name, email, img = "http://localhost:3000/../assets/user.svg", id, lastName } = useSelector(({ users }) => users.currentUser)


    return (
        < aside className="sidebar" >
            <Link to={`/profile/${id}`} className={classNames("sidebar__profileLink",
                { "none": page !== "profile" || page !== "messages" || page !== "users" })}>
                <img className="sidebar__img-foto" src={img} alt="sidebar img" />
                <div className="sidebar__profileLinkInner">
                    <h4>{name && lastName ? `${name} ${lastName}` : ""}</h4>
                    <p>{email}</p>
                </div>
            </Link>
            <Link to={`/profile/${id}`} className={classNames("sidebar__navLink", {
                "active": page === "profile",
                "none": page === "sign-up" || page === "login" || page === "select-user"
            })}><Icons className={"sidebar__profileIcon"} />Profile</Link>
            <Link to={`/messages/${id}`} className={classNames("sidebar__navLink", {
                "active": page === "messages",
                "none": page === "sign-up" || page === "login" || page === "select-user"
            })}><Icons className={"sidebar__messagesIcon"} />Messages</Link>
            <Link to={`/users/${id}`} className={classNames("sidebar__navLink", { "active": page === "users", "none": page === "sign-up" || page === "login" || page === "select-user" })}><Icons className={"sidebar__usersIcon"} />Users</Link>
        </aside >
    )

}


export default Sidebar;


