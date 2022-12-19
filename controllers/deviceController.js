const { query } = require("../db");

class DeviceController {
    async create () {

    }

    async getAll () {

    }

    async getOne (req, res) {
        const {id, ...res} = req.query;
        res.json({id, res})
    }
}

module.exports = new DeviceController();