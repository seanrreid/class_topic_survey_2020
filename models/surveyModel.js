const db = require('./conn');

class ClassInfo {
  constructor(id, name, rank) {
    this.id = id;
    this.name = name;
    this.rank = rank;
  }

  static async getAllTopicData() {
    try {
      const response = await db.any(`SELECT * FROM topics;`);
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = ClassInfo;
