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


module.exports = {
    loginOAuth,
    getUser
}