function showAccountMessage(message) {
    const element = document.getElementById('account-message');
    if (element) element.textContent = message;
}

function renderAccountPanel() {
    const panelContent = document.getElementById('account-content');
    const account = getApiSession();
    if (!panelContent) return;

    if (account) {
        panelContent.innerHTML = '<p class="account-welcome">Signed in as <strong id="account-name-display"></strong></p><button class="account-submit" id="account-sign-out" type="button">Sign out</button>';
        document.getElementById('account-name-display').textContent = account.name || account.email || account.phone || 'Handmade Bliss shopper';
        document.getElementById('account-sign-out').addEventListener('click', () => {
            localStorage.removeItem(API_SESSION_KEY);
            renderAccountPanel();
            document.dispatchEvent(new Event('accountchange'));
        });
        return;
    }

    panelContent.innerHTML = '<div class="account-tabs"><button class="account-tab active" type="button" data-mode="login">Sign in</button><button class="account-tab" type="button" data-mode="register">Create account</button></div><form id="account-form"><div class="account-field" id="account-name-field" hidden><label for="account-name">Name</label><input id="account-name" name="name" autocomplete="name"></div><div class="account-field" id="account-identity-field"><label for="account-identity">Email or phone</label><input id="account-identity" name="identity" autocomplete="username" required></div><div class="account-field" id="account-email-field" hidden><label for="account-email">Email</label><input id="account-email" name="email" type="email" autocomplete="email"></div><div class="account-field" id="account-phone-field" hidden><label for="account-phone">Phone</label><input id="account-phone" name="phone" type="tel" autocomplete="tel"></div><div class="account-field"><label for="account-password">Password</label><input id="account-password" name="password" type="password" required></div><button class="account-submit" id="account-submit" type="submit">Sign in</button><p class="account-message" id="account-message" role="status"></p></form>';

    let mode = 'login';
    panelContent.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
        mode = button.dataset.mode;
        panelContent.querySelectorAll('[data-mode]').forEach(tab => tab.classList.toggle('active', tab === button));
        document.getElementById('account-name-field').hidden = mode !== 'register';
        document.getElementById('account-identity-field').hidden = mode === 'register';
        document.getElementById('account-email-field').hidden = mode !== 'register';
        document.getElementById('account-phone-field').hidden = mode !== 'register';
        document.getElementById('account-name').required = mode === 'register';
        document.getElementById('account-identity').required = mode === 'login';
        document.getElementById('account-submit').textContent = mode === 'register' ? 'Create account' : 'Sign in';
        showAccountMessage('');
    }));

    document.getElementById('account-form').addEventListener('submit', async event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = String(form.get('email') || '').trim();
        const phone = String(form.get('phone') || '').trim();
        if (mode === 'register' && !email && !phone) {
            showAccountMessage('Enter an email or phone number to create your account.');
            return;
        }
        const payload = mode === 'register'
            ? { name: String(form.get('name')).trim(), email: email || null, phone: phone || null, password: String(form.get('password')) }
            : { email_or_phone: String(form.get('identity')).trim(), password: String(form.get('password')) };
        const submit = document.getElementById('account-submit');
        submit.disabled = true;
        showAccountMessage(mode === 'register' ? 'Creating account...' : 'Signing in...');
        try {
            const result = await fetchApi(mode === 'register' ? '/api/register' : '/api/login', { method: 'POST', body: JSON.stringify(payload) });
            localStorage.setItem(API_SESSION_KEY, JSON.stringify(result));
            renderAccountPanel();
            document.dispatchEvent(new Event('accountchange'));
        } catch (error) {
            showAccountMessage(error.message);
            submit.disabled = false;
        }
    });
}

function initAccountPanel() {
    const panel = document.getElementById('account-panel');
    const button = document.getElementById('account-button');
    const close = document.getElementById('account-close');
    if (!panel || !button || !close) return;
    renderAccountPanel();
    button.addEventListener('click', () => {
        panel.hidden = !panel.hidden;
        button.setAttribute('aria-expanded', String(!panel.hidden));
    });
    close.addEventListener('click', () => {
        panel.hidden = true;
        button.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('click', event => {
        if (!event.target.closest('.account-panel, #account-button')) {
            panel.hidden = true;
            button.setAttribute('aria-expanded', 'false');
        }
    });
}

async function getServerWishlist(userId) {
    const result = await fetchApi(`/api/wishlist/${userId}`);
    const entries = Array.isArray(result) ? result : result?.wishlist || result?.items || result?.products || [];
    return entries.map(entry => Number(typeof entry === 'object' ? entry.id ?? entry.product_id : entry)).filter(Number.isFinite);
}

function addServerWishlistItem(userId, productId) {
    return fetchApi(`/api/wishlist/${userId}/add/${productId}`, { method: 'POST' });
}

function removeServerWishlistItem(userId, productId) {
    return fetchApi(`/api/wishlist/${userId}/remove/${productId}`, { method: 'DELETE' });
}