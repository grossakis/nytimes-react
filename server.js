const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// const cheerio = require("cheerio");
// const axios = require("axios");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Define API routes here
// app.get("/scrape", function(req, res){
//   axios.get("https://www.gamespot.com/news/").then(function(response) {
//       var allResults = []
//       var $ = cheerio.load(response.data);
//       $("article.media").each(function(i, element) {
//           var result = {};
//           result.title = $(this)
//               .children().find("h3")
//               .text();
//           result.link = "https://www.gamespot.com" + $(this)
//               .children("a")
//               .attr("href")
//           result.image = $(this)
//               .children().find("img")
//               .attr("src")
//           result.description = $(this)
//               .children().find("p")
//               .text()
//           allResults.push(result)
//       });
//       // res.send("SCRAPING COMPLETE");
//       res.json(allResults);
//   })
//   .catch(function(err) {
//       return res.json(err);
//   });
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
