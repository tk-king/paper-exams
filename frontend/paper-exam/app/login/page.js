'use client'
import useAuth from "@/hooks/useAuth";
import { Button, Input, Box } from "@mui/material";


const Page = () => {

    const auth = useAuth();

    return <div>
        <h1>Login</h1>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Input className="input-primary" sx={{ m: 2 }} type="text" placeholder="Username" />
            <Input className="input-primary" sx={{ m: 2 }} type="password" placeholder="Password" />
            <Button>Login</Button>
        </Box>
        <hr></hr>
        <div>or</div>
        <h4>Login with a provider</h4>
        <Button
            className="button-primary"
            onClick={() => auth.loginOAuth("github")}
        >
            Login with Github
        </Button>
    </div>
}

export default Page;