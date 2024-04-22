const { decodeToken } = require("../helper/token-manager");
const { AuthenticationError } = require("../libs/Errors");
const handleResponse = require("./HandleResponse.middleware");

/**
 * @param {typeof import("sequelize").Model} AccountModel
 * @param {string} serectKey
 */
module.exports = async (serectKey, AccountModel, req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new AuthenticationError("Not found token", "305");
    const token = auth.slice(7);
    if (!token) throw new AuthenticationError("Not found token", "305");
    let payload;
    try {
      payload = await decodeToken(token, serectKey);
    } catch (error) {
      if (error.name === "TokenExpiredError") throw new AuthenticationError("Token Expired", "303");
      else throw new AuthenticationError("Token invalid", "304");
    }
    const instance = await AccountModel.findByPk(payload.id);

    if (!instance) throw new AuthenticationError("Token invalid", "304");

    // Neu tai khoan bi admin dang xuat
    if (instance.token === "") throw new AuthenticationError("Token Expired", "303");

    if (instance.getPubLicInfo) instance.getPubLicInfo();

    res.locals.account = instance;
    next();
  } catch (error) {
    await handleResponse(error, req, res, next);
  }
};
