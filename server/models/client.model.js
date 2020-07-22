const db = require('../db.js');

class Client {
  constructor (client) {
    this.id = client.id;
    this.name = client.name;
    this.company = client.company;
    this.website = client.website;
  }


  static async create (newClient) {
    return db.query('INSERT INTO client SET ?', newClient).then(res => { newClient.id = res.insertId; return newClient; });
  }

  static async findById (id) {
    return db.query(`SELECT * FROM client WHERE id = ${id}`)
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(rows[0]);
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async nameAlreadyExists (name) {
    return db.query('SELECT * FROM client WHERE name = ?', [name])
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }

  static async getAll (result) {
    return db.query('SELECT * FROM client');
  }


  static async updateById (id, client) {
    return db.query(
      'UPDATE client SET name = ?, company = ?, website = ? WHERE id = ?',
      [client.name, client.company, client.website, id]
    ).then(() => this.findById(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM client WHERE id = ?', id).then(res => {
      if (res.affectedRows !== 0) {
        return Promise.resolve();
      } else {
        const err = new Error();
        err.kind = 'not_found';
        return Promise.reject(err);
      }
    });
  }

  static async removeAll (result) {
    return db.query('DELETE FROM client');
  }
}

module.exports = Client;