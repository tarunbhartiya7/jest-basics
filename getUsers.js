const { findUser } = require("./user");

const getUser = async (id) => {
  if (id <= 0) {
    throw new Error("wrong id.");
  }

  const user = await findUser(id);
  return user;
};

module.exports = {
  getUser,
};
