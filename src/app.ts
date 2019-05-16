import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import expressValidator from "express-validator";


// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;
