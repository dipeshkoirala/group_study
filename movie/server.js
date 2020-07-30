const express = require("express"); // to host the backend server
const jsonServer = require("json-server"); //Provides RESTful web service
const chokidar = require("chokidar"); //monitor files for changes
const cors = require("cors"); //to enable cross origin reference sharing

const fName = process.argv[2] || "./data.js";
const port = process.argv[3] || 3300;

/* argv property returns an array containing the command line
 arguments passed when the Node. js process was launched.” ... js path.
  The second element is the path to the js file being executed. */

let router = undefined;

const app = express();

const createServer = () => {
  delete require.cache[require.resolve(fName)];
  setTimeout(() => {
    router = jsonServer.router(
      fName.endsWith(".js") ? require(fName)() : fName
    );
  }, 100);
};

createServer();

app.use(cors());

app.use("/api", (req, resp, next) => router(req, resp, next));

chokidar.watch(fName).on("change", () => {
  console.log("Reloading web service data...");
  createServer();
  console.log("Reloading web service data complete!!!");
});

app.listen(port, () => console.log(`Web service is running on port ${port}`));
