const API_BASE_URL = 'https://handmadebliss-backend-3-h5ms.onrender.com';

async function fetchApi(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }
    });
    if (!response.ok) throw new Error(`API request failed: ${response.status}`);
    return response.json();
}
