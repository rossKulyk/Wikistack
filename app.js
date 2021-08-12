var express = require('express');
const morgan = require("morgan");
var app = express();
const layout = require("./views/layout");
const { db, Page, User } = require('./models');
// const wikiRoutes = require('./routes/wiki');


app.use(morgan('dev'));
const staticMiddleware = express.static(__dirname + '/public');
app.use(staticMiddleware);
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res, next)=>{
  res.redirect("/wiki");
});

app.use("/wiki", require('./routes/wiki'));


db.authenticate()
  .then(() => {
    console.log('connected to the database');
});

const init = async () => {
  try{
    await db.sync({ force: true });
    app.listen(3000, () => console.log("Hey, I'm connected to port 1340"))

  }catch(error){
    console.error("Error connecting to db...")
  }
}

init();

