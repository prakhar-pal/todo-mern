import express from "express";
import bodyParser from 'body-parser';
import routes from "./routes/index.js";

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

app.get("*", function (req, res) {
  return res.render('error', {
    title: '404',
    error: `404: ${req.url} is not found`
  });
});

const PORT = process.env.PORT || 8080;
try {
    app.listen(PORT);
}catch(err) {
    console.log('Failed to start the server', err);
}
