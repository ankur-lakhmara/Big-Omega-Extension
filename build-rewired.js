const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js"); // If you ejected, use this instead: const defaults = rewire('./build.js')
let config = defaults.__get__("config");
// let version = require("./package.json").version;

//used to return a single chunk bundled file after build
config.optimization.runtimeChunk = false;

config.optimization.splitChunks = {
	cacheGroups: {
		default: false
	}
};
