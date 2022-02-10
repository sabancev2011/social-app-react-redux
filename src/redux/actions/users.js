import axios from "axios"

export let SET_USERS = "SET_USERS";
export let SET_USER = "SET_USER";
export let SET_PROFILE = "SET_PROFILE";
export let SET_USER_PAGE = "SET_USER_PAGE";
export let SET_USER_PAGE_COUNT = "SET_USER_PAGE_COUNT";

export let setUsers = (users) => ({ type: SET_USERS, users });
export let setUser = (user) => ({ type: SET_USER, user });
export let setProfile = (profile) => ({ type: SET_PROFILE, profile });
export let setUserPage = (page) => ({ type: SET_USER_PAGE, page });
export let setUserPageCount = (count, pageLimit) => ({ type: SET_USER_PAGE_COUNT, count, pageLimit });

export let fetchUser = (userId) => async (dispatch) => {
    let { data } = await axios.get(`/users/${userId}`);
    dispatch(setProfile(data))
}

export let fetchUsersPagin = (page, pageLimit) => async (dispatch) => {
    let { data, headers } = await axios.get(`/users?_page=${page}&_limit=${pageLimit}`);
    dispatch(setUsers(data),
        dispatch(setUserPageCount(+headers["x-total-count"], pageLimit)));
}

export let fetchUsers = () => async (dispatch) => {
    let { data } = await axios.get(`/users`);
    dispatch(setUsers(data));
}

export let fetchCreateUser = (user) => async (dispatch) => {
    let { data } = await axios.get(`/users`);
    let addedUser = { id: data.length + 1, ...user }
    await axios.post(`/users`, { ...addedUser });
    await axios.post(`/messages`, { id: addedUser.id, messages: [] })
    await axios.post(`/posts`, { id: addedUser.id, posts: [] })
    await axios.post(`/friends`, { id: addedUser.id, friends: [] })
    dispatch(setUser(addedUser));
    dispatch(setProfile(addedUser));
}







