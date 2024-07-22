import useAuth from "@/hooks/useAuth";
import { Button, Input, Box } from "@mui/material";


const Login = () => {

    const auth = useAuth();

    return <div>
        <h1>Login</h1>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Input sx={{m: 2}} type="text" placeholder="Username" />
            <Input sx={{m: 2}} type="password" placeholder="Password" />
            <Button>Login</Button>
        </Box>
        <hr></hr>
        <div>or</div>
        <h4>Login with a provider</h4>
        <Button
            onClick={() => auth.loginOAuth("github")}
        >Login with Github</Button>
    </div>
}

export default Login;