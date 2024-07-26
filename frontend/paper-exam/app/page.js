'use client'

import { Button } from "@mui/material";
import { logout } from '@/api/auth';
import useAuth from "@/hooks/useAuth";

export default function Home() {

  const { user } = useAuth();


  console.log(user)

  // if (!user) {
  //   window.location.href = "/login"
  // }

  return <div>
    <div>Homepage</div>
    <Button
      onClick={logout}
    >Logout</Button>
  </div>;
}
