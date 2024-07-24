

const BACKEND_URL = "http://localhost:4445";


export const request = async ({method, endpoint, body, params, headers}) => {
    const url = new URL(`${BACKEND_URL}/${endpoint}`);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body),
        credentials: "include"
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export default request;