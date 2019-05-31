const express = require("express");
const app = express();
var router = require('./routes/router');

require("./routes/index")(app);

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);

