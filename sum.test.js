const { sum, isValid, getData, fetchData } = require("./sum");

// toBe is a matcher used with primitive values
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// toEqual is a matcher used with objects and arrays
test("toEqual matcher", () => {
  const data = { name: "sam", age: 24 };
  expect(data).toEqual({ name: "sam", age: 24 });
});

test("toBeFalsy matcher", () => {
  const n1 = null;
  const n2 = undefined;
  const n3 = "";
  const n4 = false;
  expect(n1).toBeFalsy();
  expect(n2).toBeFalsy();
  expect(n3).toBeFalsy();
  expect(n4).toBeFalsy();
});

test("toBeTruthy matcher", () => {
  const n1 = 3;
  const n2 = "Sam";
  const n3 = true;
  expect(n1).toBeTruthy();
  expect(n2).toBeTruthy();
  expect(n3).toBeTruthy();
});

test("toThrow matcher for testing exceptions", () => {
  expect(() => isValid("3")).toThrow();
  expect(() => isValid("3")).toThrow("Invalid input!");
  expect(() => isValid(3)).not.toThrow();
});

test("testing asynchronous code", () => {
  getData().then((data) => {
    expect(data).toEqual({ age: 25, name: "Sam" });
  });
});

test("testing asynchronous code with async await", async () => {
  const data = await getData();
  expect(data).toEqual({ age: 25, name: "Sam" });
});

test("testing asynchronous code with resolves", () => {
  return expect(getData()).resolves.toEqual({ age: 25, name: "Sam" });
});

test("testing asynchronous code with callbacks", (done) => {
  function callback(data) {
    expect(data).toEqual({ age: 25, name: "Sam" });
    done();
  }

  fetchData(callback);
});

test("testing mocks", () => {
  const mock = jest.fn((x) => x + 1);
  expect(mock(1)).toBe(2);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith(1);
});

test("spying on a method of an object", () => {
  const video = {
    play() {
      console.log("Video will now play");
      return "Video playing...";
    },
  };
  const spy = jest.spyOn(video, "play");
  const spy2 = jest.spyOn(console, "log");
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe("Video playing...");
  expect(spy2).toHaveBeenCalledWith("Video will now play");

  spy.mockRestore();
  spy2.mockRestore();
});
