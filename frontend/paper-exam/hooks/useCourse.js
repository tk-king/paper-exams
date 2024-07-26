import { useEffect, useState } from "react";

import { getCourse } from "@/api/courses";

const useCourse = (courseId) => {

    const [course, setCourse] = useState(undefined);

    const refreshCourse = async () => {
        const course = await getCourse(courseId);
        setCourse(course);
    }

    useEffect(() => {
        refreshCourse();
    }
    , []);

    return {
        course,
        refreshCourse
    }

}

export default useCourse;