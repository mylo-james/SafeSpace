const SET_USER = 'users/setUser';

const REMOVE_USER = 'users/removeUser';

const setUser = (payload) => ({
    type: SET_USER,
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
    const { byId } = await res.json();
    console.log(byId);
    dispatch(setUsers(byId));
};

export const login = (state) => async (dispatch) => {
    const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(state),
    });
    const user = await res.json();
    dispatch(setUser(user));
};

export const restoreUser = () => async (dispatch) => {
    const res = await fetch('/api/session');
    dispatch(setUser(res.data.user));
    return res;
};

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    dispatch(setUser(response.data.user));
    return response;
};

export const logout = () => () => async (dispatch) => {
    const res = await fetch('/api/logout');
    if (res.ok) dispatch(removeUser());
};

const initialState = { currentUserId: null, byId: {}, allIds: [] };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state, {
                currentUserId: action.payload.id,
                byId: { ...state.byId, [action.payload.id]: action.payload },
                allIds: [...state.allIds, action.payload.id],
            });
            return newState;
        case SET_USERS:
            newState = Object.assign({}, state, {
                users: action.payload,
            });
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state, { currentUser: null });
            return newState;
        default:
            return state;
    }
}

export default reducer;
