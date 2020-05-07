import fs from "fs";
// import path from "path";
import yaml from "js-yaml";

export function getFaq() {
  // Set file by inserting slug and check if exists
  const file = `faq/faq.yml`;
  if (!fs.existsSync(file)) return null;

  // Read file
  const content = fs.readFileSync(file, "utf-8");

  // Convert yml to json
  let jsonContent;
  try {
    jsonContent = yaml.safeLoad(content);
  } catch (e) {
    console.log(e);
  }

  return jsonContent;
}
