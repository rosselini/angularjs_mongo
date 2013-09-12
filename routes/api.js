var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: { 
        first: { type: String },
        last: { type: String }
    },
    phone: { type: String },
    address: { type: String }
});

// Contact model
var ContactModel = mongoose.model('Users', ContactSchema);

// Return list contacts
exports.contacts = function (req, res) {
    var users = ContactModel.find(function(err, contacts){
        if(!err) {
            return res.json(contacts);
        } else {
            console.log('error show list contacts');    
        }
    });  
}

// Return one contact, find by id
exports.contact = function (req, res) {
    // Get id
    var id = req.params.id;

    if (id) {
        ContactModel.findById(id, function (err, contact) {
            return res.json(contact);
        });
    } else {
        console.log('not get id');
    }
}

exports.add = function (req, res) {
    //console.log(req.body);
     var user = req.body;
    user = new ContactModel({
        name: {
            first: req.body.firstName,
            last: req.body.lastName
        },
        phone: req.body.phone,
        address: req.body.address
    });

    user.save(function (err) {
        if(!err) {
            console.log(req.body.firstName);
        } else {
            console.log('error');
        }
    });
}

exports.index = function (req, res) {
    console.log('index');    
}