const API_BASE_URL = 'https://handmadebliss-backend-5-mxjr.onrender.com';
const API_SESSION_KEY = 'handmade-bliss-session';

function getApiSession() {
    try { return JSON.parse(localStorage.getItem(API_SESSION_KEY) || 'null'); }
    catch { return null; }
}

async function fetchApi(path, options = {}) {
    const session = getApiSession();
    const headers = {
        Accept: 'application/json',
        ...(session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}),
        ...(options.headers || {})
    };
    if (options.body && !headers['Content-Type']) headers['Content-Type'] = 'application/json';
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers
    });
    if (!response.ok) {
        let message = `API request failed: ${response.status}`;
        try {
            const body = await response.json();
            if (typeof body.detail === 'string') message = body.detail;
        } catch {}
        throw new Error(message);
    }
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}
