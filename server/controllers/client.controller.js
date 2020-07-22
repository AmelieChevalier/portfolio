const Client = require('../models/client.model.js');

class ClientsController {
  static async create (req, res) {
    if (!req.body) {
      return res.status(400).send({ errorMessage: 'Content for project can not be empty!' });
    }

    if (!req.body.name) {
      return res.status(400).send({ errorMessage: 'Name can not be empty!' });
    }

    try {
      const client = new Client(req.body);
      if (await Client.nameAlreadyExists(client.name)) {
        res.status(400).send({ errorMessage: 'A client with this name already exists !' });
      } else {
        const data = await Client.create(client);
        res.status(201).send({ data });
      }
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while creating the client.'
      });
    }
  }

  static async findAll (req, res) {
    try {
      const data = (await Client.getAll()).map(c => new Client(c)).map(c => ({
        id: c.id,
        name: c.name,
        company: c.company,
        website: c.website
      }));
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving clients.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Client.findById(req.params.id);

      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Client with id ${req.params.id} not found.` });
      } else {
        res.status(500).send({ errorMessage: 'Error retrieving client with id ' + req.params.id });
      }
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    try {
      const data = await Client.updateById(req.params.id, new Client(req.body));
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Client with id ${req.params.id} not found.` });
      } else {
        console.log(req.body)
        res.status(500).send({ errorMessage: 'Error updating client with id ' + req.params.id });
      }
    }
  }

  static async delete (req, res) {
    try {
      await Client.remove(req.params.id);
      res.send({ message: 'Client was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found client with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete client with id ' + req.params.id
        });
      }
    }
  }
}

module.exports = ClientsController;