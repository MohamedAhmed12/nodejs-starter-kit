/* eslint-disable no-console*/
import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

console.log(
  chalk.blue(
    "Generating minified bundle for production, This will take a moment ...."
  )
);

webpack(webpackConfig).run((err, status) => {
  // if fatal error occured stop here
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStatus = status.json();

  if (jsonStatus.hasErrors) {
    return jsonStatus.errors.map((err) => console.log(chalk.red(err)));
  }

  if (jsonStatus.hasWarnings) {
    console.log(chalk.yellow("Webpack generated the following warning: "));
    jsonStatus.warnings.map((warning) => console.log(chalks.yellow(warning)));
  }

  console.log(`Webpack Status: ${status}`);

  // if we got this far the build has succeded
  console.log(
    chalk.green("Your app has been built for production and written to /dist")
  );

  return 0;
});
