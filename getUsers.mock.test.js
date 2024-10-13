const { getUser } = require("./getUsers");
const { findUser } = require("./user");

jest.mock("./user");

// jest.mock('library/db', () => {
//   const actual = jest.requireActual('library/db');
//   return {
//       ...actual,
//       isActive: jest.fn(),
//   };
// });

describe("When testing getUser with jest mock", () => {
  // const findUserMock = findUser;

  it("should return active user", async () => {
    const id = 10;
    findUser.mockResolvedValue({
      id,
      username: "mocked username",
      active: true,
    });

    const user = await getUser(id);

    expect(findUser).toBeCalledTimes(1);
    expect(user.id).toBe(id);
    expect(user.username).toBe("mocked username");
  });

  jest.restoreAllMocks();
});
