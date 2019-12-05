const twelveDaysOfChristmas = require("../src/twelveDaysOfChristmas")

describe("twelveDaysOfChristmas/1", () => {
  // test-drive a function that, given a number representing the day of christmas,
  // returns the lyrics *up until and for* that day
  //   - lyrics available at https://www.41051.com/xmaslyrics/twelvedays.html
  it("given input less than one, expect error", () => {
      const error = "Must be larger than zero.";
      const result = twelveDaysOfChristmas.song(0);
      expect(result).toEqual(error);
  })
})
