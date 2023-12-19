const { config } = require("@swc/core/spack");

// import path module
const path = require("path");

module.exports = config({
    entry: {
        isoToLanguage: path.join("src", "index.ts"),
    },
    output: {
        path: path.join('lib', 'umd'),
    },
});
