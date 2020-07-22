const db = require('../db.js');

class Project {
  constructor (project) {
    this.id = project.id;
    this.name = project.name;
    this.image = project.image;
    this.link = project.link;
    this.duration = project.duration;
    this.presentation = project.presentation;
    this.client_id = project.client_id;
    this.logo = project.logo;
    this.content = project.content;
  }


  static async create (newProject) {
    return db.query('INSERT INTO project SET ?', newProject).then(res => { newProject.id = res.insertId; return newProject; });
  }

  static async findById (id) {
    return db.query(`SELECT * FROM project WHERE id = ${id}`)
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
    return db.query('SELECT * FROM project WHERE name = ?', [name])
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }

  static async getAll (result) {
    return db.query('SELECT * FROM project');
  }

  static async getProjectClient(project_id) {
    return db
      .query(
        'SELECT client.name, client.company, client.website FROM project LEFT JOIN client ON client.id = project.client_id WHERE project.id = ?', // eslint-disable-next-line
        [project_id]
      )
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(rows[0]);
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async updateById (id, project) {
    return db.query(
      'UPDATE project SET name = ?, image = ?, link = ?, duration = ?, presentation = ?, logo = ?, content = ?, client_id = ? WHERE id = ?',
      [project.name, project.image, project.link, project.duration, project.presentation, project.logo, project.content, project.client_id, id]
    ).then(() => this.findById(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM project WHERE id = ?', id).then(res => {
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
    return db.query('DELETE FROM project');
  }
}

module.exports = Project;