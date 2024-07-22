function loginOAuth(provider) {
    window.location.href = `http://localhost:4445/auth/login/${provider}`;
}

module.exports = {
    loginOAuth
}