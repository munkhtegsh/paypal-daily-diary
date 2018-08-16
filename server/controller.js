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
  },
  update: (req, res) => {
    let id = req.params.id;    
    let info = req.body;
    let list = data.map(item => {
      if (item.id === +id) {
        item = {...info, id:id}
      }
      return item;
    });
    res.status(200).send(list);
  }
}