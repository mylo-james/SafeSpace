export const init = async () => {
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

        return user
        
    }
};
