const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

const db = require("./models");
const Role = db.role;

const matchRoute = require('./routes/match.routes');
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/user.routes');


const url =
"mongodb+srv://timmyha619:14chui2103@ducdb.kjkro.mongodb.net/api_fantasy?retryWrites=true&w=majority";
db.mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to FantasyVCS." });
});

// routes
// app.use('/api/test', userRoute);
// app.use('', authRoute);
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
app.use('/matches', matchRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });


      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}