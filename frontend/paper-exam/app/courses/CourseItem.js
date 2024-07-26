import { Card } from "@mui/material";
import { Button } from "@mui/material";

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
            <Button 
            variant="outlined"
            onClick={clickOpen}
            >Open</Button>
        </Card>
    );
}

export default CourseItem;
