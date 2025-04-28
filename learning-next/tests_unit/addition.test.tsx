import addition from "../utils/addition";

describe("addition function", () => {
  test("two plus two is four", () => {
    expect(addition(2, 2)).toBe(4);
  });
});
