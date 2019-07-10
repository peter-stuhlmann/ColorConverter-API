module.exports = logger = (req, res, next) => {
    const currentDate = new Date().toGMTString().slice(5,16);
    const currentTime = new Date().toGMTString().slice(17,25);
    console.log(req.method + ' request on ' + req.headers.host + req.path + ' on ' + currentDate + ', ' + currentTime);
    next();
};