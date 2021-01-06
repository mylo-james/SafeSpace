import _ from 'lodash';

const SET_USERS = 'users/setUsers';

export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

export const getUsers = () => async (dispatch) => {
    const res = await fetch('/api/users');
    const {users} = await res.json();
    dispatch(setUsers(users));
};

export const getUser = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const {user} = await res.json();
    dispatch(setUsers([user]));
};



const initialState = {};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}

export default reducer;
