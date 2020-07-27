const Item = require('./item')

//Create REST API, and CRUD to mongo's schema
Item.methods(['get', 'post', 'put', 'delete'])

//Return post/put methods updated
Item.updateOptions({new: true, runValidators: true})

module.exports = Item