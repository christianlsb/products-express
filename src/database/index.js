import { Sequelize } from "sequelize";

import configDatabase from "./config/database"

const models = []

class Database{
  constructor(){
    this.init()
  }
  init(){
    this.connection = new Sequelize(configDatabase);
    models.map((model) => models.init(this.connection))
  }
}

export default new Database();