const { Router } = require("express");
const { getFilesFormatted, getAvailableFiles } = require('../controllers/files-controller');
const { validateFileName } = require("../middlewares/validate-file");

const routes = Router();

// Get formatted and valid files
routes.get('/files/data',[validateFileName],getFilesFormatted)

module.exports = routes;