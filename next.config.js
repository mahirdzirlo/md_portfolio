const path = require("path");

module.exports = {
  compiler: { removeConsole: false },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
