'use client'

import { Button } from "@mui/material";
import {logout} from '@/api/auth';

export default function Home() {

  return <div>
    <div>Homepage</div>
    <Button
      onClick={logout}
    >Logout</Button>
    </div>;
}
