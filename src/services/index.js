const MongoLib = require('../lib/mongo');

class ProductService {
  constructor() {
    this.collection = 'Store';
    this.mongoDB = new MongoLib();
  }
  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection, {});
    return products || [];
  }
  async createProducts(product) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }
}

module.exports = ProductService;
