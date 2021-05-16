const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
console.log('env', process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL)