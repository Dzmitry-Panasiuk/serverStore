const ApiError = require("../error/ApiError");

class UserController {
    async registration () {

    }

    async login() {

    }

    async check (req, res, next) {
        const {id, ...response} = req.query;

        if(!id) {
            return next(ApiError.badRequest('Не задан id'));
        }

        res.json({id, response})
    }
}

module.exports = new UserController();