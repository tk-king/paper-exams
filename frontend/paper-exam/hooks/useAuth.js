import { useState } from "react";
import { loginOAuth as loginOAuthApi } from '../api/auth';

const useAuth = () => {

    const loginOAuth = (provider) => {
        loginOAuthApi(provider);
    }

    return {
        loginOAuth
    }
}

export default useAuth;