const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./controllers/router");
const logger = require("morgan");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/chat") // connect with local db, replace later
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(router);

io.on('connection', (socket) => {
  console.log('io connecteed');
})

http.listen(3000, () => {
  console.log('server is running at port 3000')
})