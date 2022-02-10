import { ADD_FRIEND, DELETE_FRIEND, SET_FRIENDS } from "../actions/friends"


let initialState = {
    friends: [],
    isLoadedFriends: false
}

let friends = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends,
                isLoadedFriends: true
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.friend]
            }
        case DELETE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter((el) => el.id !== action.userId)
            }
        default:
            return state
    }
}

export default friends