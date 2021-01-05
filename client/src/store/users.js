const SET_USER = 'users/setUser';
const SET_USERS = 'users/setUsers';
const REMOVE_USER = 'users/removeUser';

const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

const removeUser = () => ({
    type: REMOVE_USER,
});

export const load = () => async (dispatch) => {
    console.log('load');
    const oldFetch = window.fetch;

    const response = await oldFetch('/api/csrf/restore', {
        method: 'GET',
        credentials: 'include',
    });

    if (response.ok) {
        const { csrf_token, user } = await response.json();

        window.fetch = (resource, init = {}) => {
            init.headers = {
                ...init.headers,
                'X-CSRFToken': csrf_token,
            };
            if (!init.headers['Content-Type']) {
                init.headers['Content-Type'] = 'application/json';
            }

            return oldFetch(resource, init);
        };
        if (user) dispatch(setUser(user));
        return true;
    }
};

export const getUsers = () => async (dispatch) => {
    const res = await fetch('/api/users');
    const users = await res.json();
    console.log(users);
    dispatch(setUsers(users));
};

export const login = (state) => async (dispatch) => {
    const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(state),
    });
    const user = await res.json();
    dispatch(setUser(user));
};

export const signup = (state) => async (dispatch) => {
    const res = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(state),
    });
    const user = await res.json();
    dispatch(setUser(user));
};

export const logout = () => async (dispatch) => {
    console.log('logout');
    const res = await fetch('/api/logout');
    if (res.ok) dispatch(removeUser());
};

export const editUser = (state) => async (dispatch) => {
    const res = await fetch(`/api/surveys`, {
        method: 'PUT',
        body: JSON.stringify(state),
    });
    const user = await res.json();
    dispatch(setUsers(user));
};

const initialState = { currentUserId: null, byId: {} };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state, {
                currentUserId: action.payload.id,
                byId: { ...state.byId, [action.payload.id]: action.payload },
            });
            return newState;
        case SET_USERS:
            newState = Object.assign({}, state, {
                byId: { ...state.byId, ...action.payload.byId },
            });
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            delete newState.currentUserId;
            return newState;
        default:
            return state;
    }
}

export default reducer;
