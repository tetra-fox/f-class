import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import * as HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";
import * as TerserPlugin from "terser-webpack-plugin";
const SveltePreprocess = require("svelte-preprocess"); // I have no idea why I need to use CJS syntax. import doesn't work
import ImportAssets from "svelte-preprocess-import-assets";
import Sequence from "./tools/sequence";
import "webpack-dev-server";

const config: webpack.Configuration = {
    mode: "production",
    entry: {
        index: "./src/ts/index.ts"
    },
    module: {
        rules: [
            {
                test: /\.svelte$/i,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        preprocess: Sequence([
                            SveltePreprocess({
                                scss: true,
                                sass: true,
                                postcss: true
                            }),
                            ImportAssets()
                        ])
                    },
                }
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.tsx?$/i,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpe?g|gif|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: "./img/[hash][ext][query]"
                }
            },
            {
                test: /\.(woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: "./fonts/[hash][ext][query]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: ""
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
            chunkFilename: "[hash].css"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new HtmlMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte")
        },
        extensions: [".tsx", ".ts", ".js", ".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"]
    },
    performance: {
        hints: false
    },
    output: {
        filename: "./js/[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    }
};

export default config;
