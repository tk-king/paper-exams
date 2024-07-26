'use client'
import useAuth from "@/hooks/useAuth";
import { Button, OutlinedInput, Box, GlobalStyles } from "@mui/material";


const Page = () => {

    const auth = useAuth();

    return (
        <>
            <GlobalStyles styles={{ "MuiOutlinedInput-input": { backgroundColor: 'grey' } }} />
            <div>
                <h1>Login</h1>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <OutlinedInput sx={{ m: 2 }} type="text" placeholder="Username" />
                    <OutlinedInput sx={{ m: 2 }} type="password" placeholder="Password" />
                    <Button>Login</Button>
                </Box>
                <hr />
                <div>or</div>
                <h4>Login with a provider</h4>
                <Button
                    className="button-primary"
                    onClick={() => auth.loginOAuth("github")}
                >
                    Login with Github
                </Button>
            </div>
        </>
    )
}

export default Page;
