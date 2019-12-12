var User = require('../sequelize');

module.exports = (app) => {

  app.post('/user', (req, res) => {
  //   User.findOne({
  //     where: {
  //       email: req.body.user.email
  //     }
  //   }).then(user => {
  //     if (user != null) {
  //       res.status(200).json(user);
  //     } else {
  //       res.status(404).json('user not in db')
  //     }
  //   }).catch(() => {
  //     User.create({
  //         name: req.body.name,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         user_id: req.body.user.id,
  //         email: req.params.user.email
  //       })
  //       .then(user => res.json(user))
  //       .catch(err => console.log(err))
  //   })
  // })
    console.log(req.body)
  User.upsert({name: req.body.name,
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: req.body.user_id,
    email: req.body.email
    , where: {email: req.body.email}})
    //result will return false if it updated, or true if created
    .then(result => console.log("result"+result))
    .catch(err => console.log(err))
  })
}
