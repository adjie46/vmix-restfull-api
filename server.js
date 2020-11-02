const express = require("express");
const app = express();
const config = require("./config/config");
const vmix = require("./services/vmix");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();

const cors = require('cors');
const vmixRoutes = require('./routes/vmix.routes');

app.use(bodyParser.json());
app.use(upload.array());
app.use(cors({
    origin: '*'
}));

app.use(express.static('public'));
vmixRoutes(app)

app.listen(config.serverPort, () => console.log("server running on port " + config.serverPort));