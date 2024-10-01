// use AmalKart
db.items.insertOne({name:"Samsung 30s", price :22000, rating:4.5, qty:233
    , sold: 98
})

db.items.insertMany({name:"iiiii 30s", price :2110, rating:1.5, qty:133
    , sold: 91
}, {name:"iiiii 30s", price :2110, rating:1.5, qty:133
    , sold: 91
},{name:"iiiii 30s", price :2110, rating:1.5, qty:133
    , sold: 91
})

db.items.find()
db.items.find({price: 2110})

// Searchimg for data in mongodb
db.items.find({rating: 2110})
// yeh andr filter hai k yeh rating jaha hai woh return krdo
db.items.find({rating:{$gte: 3.5}})
// $gte means gretaer than or equal to woh dekhaye ga jo 3.5 sai bari hai
db.items.find({rating:{$gt: 3.5}})
// sirf greate than 3.5 hai

// And operator 
db.items.find({rating:{$gt: 3.5}, price :{$gt: 4000}})

db.items.find({ $or:[{rating:{$lt: 3.5}},{price :{$gt: 21000}}]})

// db.items.find() sb items mil jaye ga

// projection
db.items.find({rating:{$gt: 3.5}},{$rating: 1})


// Deleting operations
db.items.find({price:22000})
db.items.deleteOne({price:22000})
db.items.deleteMany({price:22000})


// And operator 
db.items.deleteMany({rating:{$gt: 3.5}, price :{$gt: 4000}})

db.items.deleteOne({rating:{$gt: 3.5}, price :{$gt: 4000}})
// insertion data
db.items.anotherCollection.insertOne({rating:{a: 3.5}})

// db.items.find() sb  mil jaye ga

db.items.insertOne({name:"Samsung 30s", price :22000, rating:4.5, qty:233
    , sold: 98
})

db.items.insertMany({name:"iiiii 30s", price :2110, rating:1.5, qty:133
    , sold: 91
}, {name:"iiiii 30s", price :2110, rating:1.5, qty:133
    , sold: 91
},{name:"iiiii 30s", price :2110, rating:1.5, qty:133
    , sold: 91
})

//  Items update 
db.items.updateOne({name: "Moto30s"},{$set: {price:2}})
db.items.updateMany({name: "Moto30s"},{$set: {price:2}})

db.items.updateMany({name: "Moto30s"},{$set: {price:3}})







