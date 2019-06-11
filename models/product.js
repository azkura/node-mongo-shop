const mongoDb = require('mongoDb')
const getDb = require('../helpers/database').getDb

class Product {
  constructor(title, imageUrl, price, description, id) {
    this.title = title,
    this.imageUrl = imageUrl,
    this.price = price,
    this.description = description,
    this._id = id
  }

  save(){
    const db = getDb()
    let dbOp
    if(this._id){
      //update the product
      dbOp = db.collection('products').updateOne({ _id: new mongoDb.ObjectId(this._id)}, {$set: this})
    } else {
      dbOp =  db.collection('products').insertOne(this)
    }
    return dbOp
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err))
  }
// fetching all product from db
  static fetchAll() {
    const db = getDb()
    return db
    .collection('products')
    .find()
    .toArray()
    .then(products => {
      console.log(products)
      return products
    })
    .catch(err => console.log(err))
  }

  //fetch one product from db
  static findById(prodId) {
    const db = getDb()
    return db
    .collection('products')
    .find({ _id: new mongoDb.ObjectId(prodId) })
    .next()
    .then(product => {
      console.log(product)
      return product
    })
    .catch(err => console.log(err))
  }
}

module.exports = Product;

