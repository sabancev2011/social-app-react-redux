import axios from "axios"

export let SET_POSTS = "SET_POSTS"
export let ADD_POST = "ADD_POST";
export let ADD_POST_IMAGE = "ADD_POST_IMAGE";
export let DELETE_POST = "DELETE_POST";
export let CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
export let SET_RANDOM_POST_PHRASE = "SET_RANDOM_POST_PHRASE";

export let setPosts = (posts) => ({ type: SET_POSTS, posts });
export let addPost = (post) => ({ type: ADD_POST, post });
export let addPostImage = (image) => ({ type: ADD_POST_IMAGE, image });
export let deletePost = (id) => ({ type: DELETE_POST, id });
export let changePostText = (text) => ({ type: CHANGE_POST_TEXT, text });
export let setRandomPostPhrase = (phrase) => ({ type: SET_RANDOM_POST_PHRASE, phrase });


export let fetchPosts = (userId) => async (dispatch) => {
    let { data } = await axios.get(`/posts/${userId}`)
    dispatch(setPosts(data.posts));
}

export let fetchAddPost = (userId, posts, currentPostText, currentPostImage) => async (dispatch) => {
    await axios.put(`/posts/${userId}`, {
        id: userId,
        posts: [...posts, {
            postId: posts.length + 1,
            postText: currentPostText,
            postImage: currentPostImage,
            currentPostTime: new Date().toString().substr(4, 21)
        }]
    });
    dispatch(addPost({
        postId: posts.length + 1,
        postText: currentPostText,
        postImage: currentPostImage,
        currentPostTime: new Date().toString().substr(4, 21)
    }))
};

export let fetchDeletePost = (userId, postId, posts) => async (dispatch) => {
    await axios.put(`/posts/${userId}`, {
        id: userId,
        posts: posts.filter((post) => post.postId !== postId)
    });
    dispatch(deletePost(postId))
}

export let fetchRandomPostPhrase = () => async (dispatch) => {
    let { data: { text } } = await axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`);
    dispatch(setRandomPostPhrase(text))
}