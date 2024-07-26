import { use, useState, useEffect } from "react";
import { loginOAuth as loginOAuthApi, getUser as getUserApi } from '../api/auth';
import authStore from "@/stores/authStore";

const useAuth = () => {

    const user = authStore((state) => state.user);
    const setUser = authStore((state) => state.setUser);


    const loginOAuth = (provider) => {
        loginOAuthApi(provider);
    }

    useEffect(() => {
        checkLogin();
    }, []);


    const checkLogin = async () => {
        const user = await getUserApi();
        setUser(user);
        return user;
    }

    return {
        loginOAuth,
        user
    }
}

export default useAuth;