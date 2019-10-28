const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//inicializacion 
const app=express();

//settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
//midwares
//variables
//routes
//static files
app.listen(app.get('port'),()=>{
    Console.log('Servidor JSON online por el puerto: ', app.get('port'));
});

app.engine('hbs',exphbs({
    defaultLayout:'main', 
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'hbs'
}));

app.set('view engine', 'hbs');
//server