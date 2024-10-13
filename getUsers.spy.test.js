const { getUser } = require("./getUsers");
const userFunctions = require("./user");
// spyOn does not work with commonJS but only with module system

describe("When testing getUser with jest mock", () => {
  it("should return active user", async () => {
    const id = 10;
    const spy = jest.spyOn(userFunctions, "findUser").mockResolvedValueOnce({
      id: 10,
      username: "spy username",
      active: true,
    });
    const user = await getUser(id);

    // expect(spy).toHaveBeenCalled();
    expect(user.id).toBe(id);
    expect(user.username).toBe("username 10");

    jest.restoreAllMocks();
  });
});
