const { default: request } = require("./request")


const getQuestions = async () => {
    const res = await request({
        method: "GET",
        endpoint: "questions"
    })
    return res;
}

module.exports = {
    getQuestions
}
