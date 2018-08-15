const data = require('./data');
let id = 5;

module.exports = {
  create: (req, res) => {
    console.log(req.body)
    data.push({...req.body, id: id});
    res.status(200).send(data);
    id++;
  },
  read: (req, res) => {
    res.status(200).send(data);
  }
}