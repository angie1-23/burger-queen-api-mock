const express = require("express");
const app = express ();

const port = process.env.PORT || 400;

app.listen(port);

console.log(`listen on port ${port}`);