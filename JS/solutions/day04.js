const md5 = require("md5");

const brutal = (input, start = 1, matcher = "00000") => {
  const secret = input.trim();
  for (let i = start; i > 0; i++) {
    const hash = md5(`${secret}${i}`);
    if (hash.slice(0, matcher.length) == matcher) return i;
  }
};

const part1 = (input) => { return brutal(input) };
const part2 = (input) => { return brutal(input, 346386, "000000") };

module.exports = [part1, part2];
