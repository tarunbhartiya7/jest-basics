const isActive = (userId) => userId % 2 === 0;

const findUser = async (id) => {
  console.log("called.....");
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    id,
    username: `username ${id}`,
    active: isActive(id),
  };
};

module.exports = {
  findUser,
};
