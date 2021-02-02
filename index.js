
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.static('main'));

const dbURI = "mongodb+srv://db:db@cluster0.wlxtd.mongodb.net/test";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

//   try {
//     db.inventory.insertOne( { item: "card", qty: 15 } );
//  } catch (e) {
//     print (e);
//  };




app.get('/', (req, res) => {
  res.render('main\index.html')
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})