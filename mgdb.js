const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

// for connection
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("leaf");
   
    db.collection('inventory').find({}).toArray().then((docs)=>{
        console.log(docs);
    }).catch((err)=>{
        console.log(docs);
    }).finally(()=>{
        client.close();
    });


    // for checking the collections
    db.listCollections().toArray().then((docs) => {

        console.log('Available collections:');
        docs.forEach((doc, idx, array) => { console.log(doc.name) });

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });

    // finding one
   
    let query = {status:'AA'}
    db.collection('inventory').findOne(query).then(doc=>{
        console.log("only one");
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        client.close();
    });

    //for insertion
    let insertionquery = [{item: "journalist", qty: 285, status: "AA", size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ]}]
    db.collection('inventory').insertMany(insertionquery).then(doc=>{
        console.log("this is insertion");
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        client.close();
    })



});
