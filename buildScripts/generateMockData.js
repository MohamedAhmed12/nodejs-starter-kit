/* This Script generate mock data for local development
 * This way u don't have to point to laocal API
 * and you can have realistic but randomized data
 * and rapid page load due to local, static data
 */

// eslint-disable no-console

import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const jsonSchema = JSON.stringify(jsf.generate(schema));

fs.writeFile("src/api/db.json", jsonSchema, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  }

  console.log(chalk.green("Mock data generated successfully!"));
});
