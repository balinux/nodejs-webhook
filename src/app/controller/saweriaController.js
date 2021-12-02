const webhook = (req,res) => {
    res.send("webhook")
    console.log("access from webhook");
}

const getwebhook = (req,res) => {
    res.send("webhook")
    console.log("access from webhook");
}


module.exports = {webhook, getwebhook}