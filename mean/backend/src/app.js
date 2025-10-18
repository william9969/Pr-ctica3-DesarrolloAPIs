const express=require('express');
const morgan=require('morgan');
const cors = require('cors');

const app=express();

//settings
app.use(cors());
app.use(express.json());
app.use('/api/',require('./routes/empleados.routes'));
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
app.use(morgan('dev'));
module.exports=app;
