import { SET_USERS, SET_USER, SET_PROFILE, SET_USER_PAGE, SET_USER_PAGE_COUNT } from "../actions/users"

let initialState = {

    users: [],
    isLoaded: false,
    currentUser: false,
    profile: [],
    userPage: 1,
    userPageCount: [],
    usersCount: ""
}

let users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                isLoaded: true
            }
        case SET_USER:
            return {
                ...state,
                currentUser: { ...action.user },
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: { ...action.profile }
            }
        case SET_USER_PAGE:
            return {
                ...state,
                userPage: action.page
            }
        case SET_USER_PAGE_COUNT:
            return {
                ...state,
                userPageCount: [...Array(Math.ceil(action.count / action.pageLimit))]
            }
        default:
            return state
    }
}
export default users;