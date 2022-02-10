import Share from "./Share";
import PostItem from "./PostItem";


function Posts({ currentUserId, id, currentPostText, currentPostImage, clickAddPost, onChangePostText, clickDeletePost, onAddPostImage, posts, name, lastName, img, onFetchRandomPostPhrase }) {
    return (
        <div className="posts">
            {id === currentUserId &&
                <Share img={img} name={name} currentPostText={currentPostText}
                clickAddPost={clickAddPost} onChangePostText={onChangePostText} onAddPostImage={onAddPostImage} posts={posts}
                    id={id} currentPostImage={currentPostImage} onFetchRandomPostPhrase={onFetchRandomPostPhrase} />} 
            {posts && posts.map((el) => {
                return <PostItem id={id} name={name} lastName={lastName} img={img} postText={el.postText} postImage={el.postImage} key={el.postId}
                    postId={el.postId} clickDeletePost={clickDeletePost} posts={posts} currentUserId={currentUserId} currentPostTime={el.currentPostTime} />
            })}
        </div>
    )
}

export default Posts;