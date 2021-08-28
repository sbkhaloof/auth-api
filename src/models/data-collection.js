'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!



class Collection {
  constructor(model) {
    // the mddel should be a valid sequelize model
    this.model = model;
  }

  async create(modelInfo) {
    let record = await this.model.create(modelInfo);
    return record;
  }

  async get(id) {
    let record = await this.model.findOne({ where: { id: id } });
    return record;
  }

  async getAll() {
    let all = await this.model.findAll();
    return all;
  }

  async update(id, modelInfo) {
    let record = await this.model.findOne({ where: { id } });
    let updateRecord = await record.update(modelInfo);
    return updateRecord;
  }

  async delete(id) {
    let record = await this.model.destroy({ where: { id } });
    return record;
  }
}

module.exports = Collection;