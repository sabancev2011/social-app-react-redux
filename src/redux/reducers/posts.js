import { ADD_POST, DELETE_POST, CHANGE_POST_TEXT, ADD_POST_IMAGE, SET_POSTS, SET_RANDOM_POST_PHRASE } from "../actions/posts"

let initialState = {
    posts: [],
    currentPostText: "",
    currentPostImage: ""
}

let posts = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts],
                currentPostText: "",
                currentPostImage: ""
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.postId !== action.id)
            }
        case CHANGE_POST_TEXT:
            return {
                ...state,
                currentPostText: action.text
            }
        case ADD_POST_IMAGE:
            return {
                ...state,
                currentPostImage: action.image
            }
            case SET_RANDOM_POST_PHRASE:
                return {
                    ...state,
                    currentPostText: action.phrase
                }
        default:
            return state
    }
}

export default posts