const express = require('express');
const config =require('config');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();

const port=process.env.PORT || config.get('port') ;
app.listen(port,()=>{
  console.log(`listening at port ${port}` )
})


module.exports = app;
