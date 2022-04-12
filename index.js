const express = require('express');
const app = express();
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);
const http = require('http');
const server = http.createServer(app);
app.get('/', function (req, res) {
    res.send(req.ipInfo)
    console.log(req.ipInfo);
});



server.listen(process.env.PORT, () => {
    console.log('listening on *:3000');
  });
  