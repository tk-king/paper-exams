import request from "./request";



function loginOAuth(provider) {
    window.location.href = `http://localhost:4445/auth/login/${provider}`;
}

const getUser = async () => {
    const res = await request({
        method: "GET",
        endpoint: "auth/user"
    });
    return res;
}

const logout = () => {
    window.location.href = `http://localhost:4445/auth/logout`;
}

module.exports = {
    loginOAuth,
    getUser,
    logout
}