'use client'
import useCourses from "@/hooks/useCourses";
import CourseItem from "./CourseItem";

const Page = () => {
    const { courses } = useCourses(); 

    console.log(courses);

    if (!courses) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>Courses</div>
            {courses && courses.map(course => 
                <CourseItem key={course.id} course={course} />
            )}
        </div>
    );
}

export default Page;
