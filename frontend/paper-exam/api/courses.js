const { default: request } = require("./request")


const getCourses = async () => {
    const res = await request({
        method: "GET",
        endpoint: "courses"
    })
    return res;
}

const addCourse = async (course) => {
    const res = await request({
        method: "POST",
        endpoint: "courses",
        body: course
    })
    return res;
}

const getCourse = async (courseId) => {
    const res = await request({
        method: "GET",
        endpoint: `courses/${courseId}`
    })
    return res;
}

module.exports = {
    getCourses,
    getCourse,
    addCourse
}