const express = require('express');
const route = require('./src/routes');

const db = require('./src/config/db');
const path =require('path');

db.connect();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

route(app);

app.use((req,res,next)=>{
  res.status(404).json({message:404});
})

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});