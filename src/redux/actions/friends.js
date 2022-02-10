import axios from "axios"

export let SET_FRIENDS = "SET_FRIENDS";
export let ADD_FRIEND = "ADD_FRIEND";
export let DELETE_FRIEND = "DELETE_FRIEND";

export let setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export let addFriend = (friend) => ({ type: ADD_FRIEND, friend });
export let deleteFriend = (userId) => ({ type: DELETE_FRIEND, userId });

export let fetchFriends = (userId) => async (dispatch) => {
    let { data } = await axios.get(`/friends/${userId}`);
    dispatch(setFriends(data.friends))
}

export let fetchDeleteFriend = (friends, currentUserId, userId) => async (dispatch) => {
    let { data } = await axios.put(`/friends/${currentUserId}`, { id: currentUserId, friends: friends.filter((el) => el.id !== userId) });
    await axios.put(`/friends/${userId}`, { id: userId, friends: data.friends.filter((el) => el.id !== currentUserId) });
    dispatch(deleteFriend(userId))
}

export let fetchAddFriend = (friends, currentUser, user) => async (dispatch) => {
    await axios.put(`/friends/${currentUser.id}`, { id: currentUser.id, friends: [...friends, user] });
    let { data } = await axios.get(`/friends/${user.id}`)
    await axios.put(`/friends/${user.id}`, { id: user.id, friends: [...data.friends, currentUser] });
    dispatch(addFriend(user))
}




