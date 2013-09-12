var express = require('express'),
    api = require('./routes/api'),
    app = module.exports = express();

app.configure(function() {
  app.locals.pretty = true;
  app.set('port', 1224);
  app.use(express.bodyParser());
});

app.get('/', api.index); // main page
app.get('/api/contacts', api.contacts); //look at all
app.get('/api/contact/:id', api.contact); // look at one user
app.post('/api/add', api.add); // add new user



//app.get('/api/contact/:id', api.contact); //look at one
//app.post('/api/contact', api.add); //add contact
//app.put('/api/contact/:id', api.edit); //edit&update contact
//app.delete('/api/contact/:id', api.delete); //delete contact
//dapp.get('*', routes.index);

app.listen(1224, function(){
  console.log("Express server up and running for the API on port 1224.");
});