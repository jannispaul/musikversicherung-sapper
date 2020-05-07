import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function getReviews() {
  // Find all yml files in reviews folder and store slugs (remove file extension)
  const slugs = fs
    .readdirSync("reviews")
    .filter(file => path.extname(file) === ".yml")
    .map(file => file.slice(0, -4));

  // Return slugs
  // return slugs.map(getReview);

  // Sort according to date
  return slugs.map(getReview).sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export function getReview(slug) {
  // Set file by inserting slug and check if exists
  const file = `reviews/${slug}.yml`;
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
