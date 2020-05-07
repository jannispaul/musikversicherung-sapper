import { getFaq } from "./_faq.js";

// Declare contents for later use
let contents;

export async function get(req, res, next) {
  // If contents is undefined or in production
  if (!contents || process.env.NODE_ENV !== "production") {
    // Call getFaq and extract values from object into array
    const faq = Object.values(getFaq());

    // If faq is NOT null set headers and stringify
    if (faq !== null) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(faq));
    } else {
      next();
    }
  }
}
