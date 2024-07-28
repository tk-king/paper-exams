import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Link from "next/link";

const CourseItem = ({ course }) => {
    if (!course) {
        return null; // or some fallback UI
    }

    const clickOpen = () => {
        window.location.href = "/courses/" + course._id;
    }

    return (
        <Card sx={{ m: 2, p: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>{course.name}</div>

            <Link
                href={"/courses/" + course._id}
            >
                <Button
                    variant="outlined"
                    onClick={clickOpen}
                >
                    Open
                </Button>
            </Link>
        </Card>
    );
}

export default CourseItem;
