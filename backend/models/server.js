const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = "8081";
    this.paths = {
      files: "/",
    };
    // Middlewares
    this.middlewares();

    // REST API routes
    this.routes();
  }

  // Function to validate incoming requests
  middlewares() {
    this.app.use(cors());
    // allow request to accept a body
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    // This is the path to the Files API
    this.app.use(this.paths.files, require("../routes/files-routes"));
  }

  // Server will run under PORT 8081
  listen() {
    this.app.listen(this.port, (req, res) => {
      console.log("Server running on port " + this.port);
    });
  }
}

module.exports = Server;
