// implement twelveDaysOfChristmas

module.exports = {
    song:(day) => {
        if (!parseInt(day)) {
            return "Day must be an integer between 1 and 12";
        }
    }
};
