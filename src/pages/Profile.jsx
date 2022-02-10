import { UserInfo, ProfileTop, ProfileFriends, Posts } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { changePostText, fetchAddPost, fetchDeletePost, addPostImage, fetchPosts, fetchRandomPostPhrase } from "../redux/actions/posts";
import { fetchUser } from "../redux/actions/users";
import { fetchFriends } from "../redux/actions/friends";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {

    let { userId } = useParams();
    let dispatch = useDispatch();

    let currentUserId = useSelector(({ users }) => users.currentUser.id);
    let { id, img, name, country, city, email, jobTitle, dateOfBirth, lastName } = useSelector(({ users }) => users.profile);
    let { currentPostText, posts, currentPostImage } = useSelector(({ posts }) => posts);
    let { friends } = useSelector(({ friends }) => friends);

    let onChangePostText = (text) => dispatch(changePostText(text));
    let clickAddPost = (id, posts, currentPostText, currentPostImage) => dispatch(fetchAddPost(id, posts, currentPostText, currentPostImage));
    let clickDeletePost = (id, postId, posts) => dispatch(fetchDeletePost(id, postId, posts));
    let onAddPostImage = (image) => dispatch(addPostImage(image));
    let onFetchRandomPostPhrase = () => dispatch(fetchRandomPostPhrase()) 

    useEffect(() => {
        dispatch(fetchUser(userId))
        dispatch(fetchFriends(userId))
        dispatch(fetchPosts(userId))
    }, [dispatch, userId])

    return (
        <div className="profile">
            <ProfileTop img={img} name={name} lastName={lastName} />
            <div className="profile__wrapper">
                <Posts currentUserId={currentUserId} id={id} posts={posts} name={name} lastName={lastName} img={img}
                    currentPostText={currentPostText} currentPostImage={currentPostImage} clickAddPost={clickAddPost} onChangePostText={onChangePostText}
                    clickDeletePost={clickDeletePost} onAddPostImage={onAddPostImage} onFetchRandomPostPhrase={onFetchRandomPostPhrase} />
                <div className="profile__info">
                    <UserInfo info={{country: country, city:city, email: email, jobTitle: jobTitle, dateOfBirth: dateOfBirth}} />
                    <ProfileFriends friends={friends} />
                </div>
            </div>
        </div >
    )
}


export default Profile;