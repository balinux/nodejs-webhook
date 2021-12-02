const moodleWebhook = (req,res) => {
    res.send("moodleWebhook")
    console.log(req.body);
    console.log("access from moodleWebhook");
}

const getMoodleWebhook = (req,res) => {
    res.send("moodleWebhook")
    // console.log(req.body);
    // console.log("access from moodleWebhook");
}


module.exports = {moodleWebhook, getMoodleWebhook}