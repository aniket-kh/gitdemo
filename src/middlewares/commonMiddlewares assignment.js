const middleware = function (req, res, next) {
    const FreeAppUser = req.headers.isfreeappuser;

    if (FreeAppUser === "true" || FreeAppUser === "false") {
        const isFreeAppUser = FreeAppUser;
        req.body["isFreeAppUser"] = isFreeAppUser;
        next();
    }
    else {
        return res.send({ msg: "header is mendatory" })
    }

};

module.exports = middleware;