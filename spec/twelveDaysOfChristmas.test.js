const twelveDaysOfChristmas = require("../src/twelveDaysOfChristmas")

describe("twelveDaysOfChristmas/1", () => {
  // test-drive a function that, given a number representing the day of christmas,
  // returns the lyrics *up until and for* that day
  //   - lyrics available at https://www.41051.com/xmaslyrics/twelvedays.html
  describe("Invalid Inputs", () => {
    const error = "Day must be an integer between 1 and 12";

    it("returns an error if given an in put that is not an integer between 1 - 12", () => {
      const result1 = twelveDaysOfChristmas.song(0);
      expect(result1).toEqual(error);
    });
    it('returns an error if input is string', () => {
      const result2 = twelveDaysOfChristmas.song("merry xmas");
      expect(result2).toEqual(error);

    })
    it('returns an error if input is null', () => {
      const result3 = twelveDaysOfChristmas.song(null);
      expect(result3).toEqual(error);

    })
    it('returns an error if input is a negative number', () => {
      const result4 = twelveDaysOfChristmas.song(-1);
      expect(result4).toEqual(error);

    })
    it('returns an error if input is larger than 12', () => {
      const result5 = twelveDaysOfChristmas.song(13);
      expect(result5).toEqual(error);

    })
    it('returns an error if input is a float', () => {
      const result6 = twelveDaysOfChristmas.song(3.14);
      expect(result6).toEqual(error);

    })
    it('returns an error if input is an empty string', () => {
      const result7 = twelveDaysOfChristmas.song("");
      expect(result7).toEqual(error);
    })
  })
})
