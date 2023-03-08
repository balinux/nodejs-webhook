const axios = require('axios')

const moodleWebhook = (req, res) => {
    res.send("moodleWebhook")
    console.log(req.body);
    pickOptions(req.body)

}

const getMoodleWebhook = (req, res) => {
    res.send("moodleWebhook")
    // console.log(req.body);
    // console.log("access from moodleWebhook");
}

async function pickOptions(data) {
    console.log(data.component);
    if (data.component == "mod_assign") {
        if (data.action == "viewed" && data.target == "course_module") {
            let user = findUserById(data.userid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} sedang membuka course ${cource[0].cource_name}`

            sendMessage({ "message": message })
        } else if (data.action == "viewed" && data.target == "submission_form") {
            let user = findUserById(data.userid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} sedang membuka submission form course ${cource[0].cource_name}`

            sendMessage({ "message": message })
        } else if (data.action == "viewed" && data.target == "grading_table") {
            let user = findUserById(data.userid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} membuka grading table course ${cource[0].cource_name}`

            sendMessage({ "message": message })
        } else if (data.action == "viewed" && data.target == "grading_form") {
            let user = findUserById(data.userid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} membuka grading form course ${cource[0].cource_name}`

            sendMessage({ "message": message })
        } else {
            console.log("course_module lain");
        }
    } else if (data.component == "assignsubmission_file") {
        if (data.action == "uploaded" && data.target == "assessable") {
            let user = findUserById(data.userid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} sudah mengupload file pada course ${cource[0].cource_name}`

            sendMessage({ "message": message })
        } else if (data.action == "updated" && data.target == "submission") {
            let user = findUserById(data.userid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} sudah mengupdate submission pada course ${cource[0].cource_name}`
            sendMessage({ "message": message })
        } else {
            console.log("assignsubmission_file handler");
        }
    } else if (data.component == "core") {
        if (data.action == "graded" && data.target == "user") {
            let user = findUserById(data.userid)
            let relateduserid = findUserById(data.relateduserid)
            let cource = findCourceById(data.courseid)
            let message = `${user[0].user_name} sudah memberikan ${relateduserid[0].user_name} nilai submission: ${data.other.finalgrade} pada course ${cource[0].cource_name}`

            sendMessage({ "message": message })
        }
        else { }
    } else {
        console.log(" mod_assign lain");

    }
}

async function sendMessage(data) {
    // send to telegra servive
    try {
        //   const response = await axios.post('http://localhost:3005/from-moodle');
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3005/from-moodle',
            data: data
            // data: {
            //   firstName: 'Fred',
            //   lastName: 'Flintstone'
            // }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
   
    // send to line servive
    try {
        //   const response = await axios.post('http://localhost:3005/from-moodle');
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/from-moodle',
            data: data
            // data: {
            //   firstName: 'Fred',
            //   lastName: 'Flintstone'
            // }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const findUserById = (id) => {
    const user = data.users.filter(user => user.id == id);
    return user;
}
const findCourceById = (id) => {
    const cource = data.courses.filter(course => course.id == id);
    return cource;
}

const data = {
    users: [
        {
            "id": 4,
            "user_name": "user 1"
        },
        {
            "id": 2,
            "user_name": "admin"
        },
    ],
    courses: [
        {
            "id": 4,
            "cource_name": "soft computing"
        }
    ],
    assignments: [
        {
            "id": 1,
            "assignment_name": "test assignment 2"
        }
    ]
}

module.exports = { moodleWebhook, getMoodleWebhook }