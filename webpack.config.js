/**
 * Created by shearerbeard on 11/14/15.
 */

var path = require("path");

module.exports = {
    devtool: "source-maps",
    entry: {
        "main": ["./main.js"]
    },
    output: {
        path: path.join(__dirname, "./target"),
        filename: "[name].bundle.js",
        publicPath: "/target"
    },
    resolve: {
        extensions: ["", ".js"],
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /^(?!.*(bower_components|node_modules))+.+\.worker.js$/,
                loader: "babel!worker?inline=true"},
            {
                test: /^(?!.*(bower_components|node_modules))+.+\.js$/,
                loader: "babel"
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};
