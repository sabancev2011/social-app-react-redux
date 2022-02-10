import { UsersItem, Loader, PageList } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersPagin, setUserPage } from "../redux/actions/users";
import { useEffect } from "react";
import { fetchFriends, fetchAddFriend, fetchDeleteFriend } from "../redux/actions/friends";

function Users() {
    let dispatch = useDispatch();
    let { isLoaded, currentUser, users, userPage, userPageCount } = useSelector(({ users }) => users);
    let { isLoadedFriends, friends } = useSelector(({ friends }) => friends)
    let clickAddFriend = (friends, currentUser, user) => dispatch(fetchAddFriend(friends, currentUser, user));
    let clickDeleteFriend = (friends, currentUserId, userId) => dispatch(fetchDeleteFriend(friends, currentUserId, userId));
    let onSetUserPage = (page) => dispatch(setUserPage(page));
    let pageLimit = 16;

    useEffect(() => {
        dispatch(fetchUsersPagin(userPage, pageLimit));
        dispatch(fetchFriends(currentUser.id));
    }, [dispatch, currentUser, userPage, pageLimit])

    return (
        <section className="users">
            <div className="users__wrapper">
                {isLoaded && isLoadedFriends ?
                    users.map((el) => (el.id !== currentUser.id) && < UsersItem key={el.id} currentUser={currentUser} user={{ ...el }} clickAddFriend={clickAddFriend}
                        clickDeleteFriend={clickDeleteFriend} friends={friends} />)
                    : [...Array(16)].map((el, index) => {
                        return <Loader key={`${el}_${index}`} />
                    })}
            </div>
            <PageList pageCount={userPageCount} onSetPage={onSetUserPage} page={userPage} />
        </section>
    )
}

export default Users;