import Sequelize from "sequelize";
import Category from "../app/models/Category";

import Product from "../app/models/Product";

import configDatabase from "../config/database";

const models = [Product, Category];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
