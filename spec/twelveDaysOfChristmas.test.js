const twelveDaysOfChristmas = require("../src/twelveDaysOfChristmas")

describe("twelveDaysOfChristmas/1", () => {
  // test-drive a function that, given a number representing the day of christmas,
  // returns the lyrics *up until and for* that day
  //   - lyrics available at https://www.41051.com/xmaslyrics/twelvedays.html
  describe("Invalid Inputs", () => {

    it("returns an error if given an in put that is not an integer between 1 - 12", () => {
      const error = "Day must be an integer between 1 and 12";

      const result1 = twelveDaysOfChristmas.song(0);
      const result2 = twelveDaysOfChristmas.song("merry xmas");
      const result3 = twelveDaysOfChristmas.song(null);

      expect(result1).toEqual(error);
      expect(result2).toEqual(error);
      expect(result3).toEqual(error);
    });
  })
})
