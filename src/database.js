const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/postick', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db=>console.log('MongoDb conectado'))
    .catch(err=>console.error(err));
;