const moment = require('moment');
const today = moment().format('YYYY-MM-DD');
const data = require('./data');
let id = 5;

module.exports = {
  create: (req, res) => {
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
  },
  readToday: (req, res) => {
    let todayDiary = data.filter(item => {
      if (item.date === today) {
        return item;
      }
    });
    res.status(200).send(todayDiary);
  },
  readDate: (req, res) => {
    let dateList = data.filter(item => {
      if (item.date === req.params.date) {
        return item;
      }
    });
    res.status(200).send(dateList);
  }
}