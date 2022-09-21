const sizeService = require("../app/services/sizeService");

module.exports = {
  async getById(req, res, next) {
    try {
      const data = await sizeService.get(req.params.id);
      if (data !== null) {
        next();
      } else {
        res.status(404).json({
          status: false,
          message: "Data not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  },
};
