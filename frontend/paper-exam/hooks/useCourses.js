import { useEffect, useState } from "react";
import { getCourses, addCourse as addCourseApi } from "../api/courses";


const useCourses = () => {

    const [courses, setCourses] = useState(undefined);


    const refreshCourses = async () => {
        const courses = await getCourses();
        setCourses(courses);
    }

    const addCourse = async (course) => {
        await addCourseApi(course);
        await refreshCourses();
    }


    useEffect(() => {
        refreshCourses();
    }
    , []);

    

    return {
        courses,
        addCourse
    }

}

export default useCourses;