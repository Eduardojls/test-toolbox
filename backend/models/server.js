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

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.files, require("../routes/files-routes"));
  }

  listen() {
    this.app.listen(this.port, (req, res) => {
      console.log("Server running on port " + this.port);
    });
  }
}

module.exports = Server;
