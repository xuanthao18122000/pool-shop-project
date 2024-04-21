import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
/**
 * @type { {start: Promise} }
 */
const app = express();

// setup app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan User
app.use(
  morgan(
    "\x1b[38;5;36mUser :remote-addr  :user-agent -\x1b[33m [:date[iso]] :method :url - \x1b[38;5;75mResponse status=:status :response-time ms",
    {
      // eslint-disable-next-line  no-unused-vars
      skip: function (req, res) {
        return process.env.NODE_ENV === "test" || req.url === "/ping";
      },
    }
  )
);

// app.use(routes);
export default app;
