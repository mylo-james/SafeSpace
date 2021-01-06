import { setUsers } from './users';
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

const removeUser = () => ({
    type: REMOVE_USER,
});

export const load = () => async (dispatch) => {
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
        if (user) {
            console.log(user);
            dispatch(setUser(user));
        }
        return true;
    }
};

export const login = (state) => async (dispatch) => {
    const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(state),
    });
    const { user } = await res.json();
    dispatch(setUser(user));
};

export const signup = (state) => async (dispatch) => {
    const res = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(state),
    });
    const { user } = await res.json();
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
    const { user } = await res.json();
    console.log(user);
    dispatch(setUser(user));
};

const initialState = { currentUserId: null };

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}

export default reducer;
