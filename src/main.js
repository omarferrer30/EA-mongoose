"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
// Connection
mongoose.connect('mongodb://localhost:27017/ea-mongoose')
    .catch(function (error) { return console.log(error); });
// Madel and Interface
var User_1 = require("./models/User");
var Todo_1 = require("./models/Todo");
// One user
var user1 = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
    }
};
var user2 = {
    "id": 2,
    "name": "Omar Ferrer",
    "username": "Bret",
    "email": "test@test.com",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
    }
};
// Insert
var newUser = new User_1.UserModel(user1);
newUser.save()
    .then(function (user) {
    console.log('User Inserted ' + user._id + ' ' + user.id);
})
    .catch(function (error) {
    console.log('Error: Insert user1');
});
// Insert
var newUser2 = new User_1.UserModel(user2);
newUser2.save()
    .then(function (user) {
    console.log('User Inserted ' + user._id + ' ' + user.id);
})
    .catch(function (error) {
    console.log('Error: Insert user2');
});
// Usar el método find para obtener todos los usuarios y manejarlo con una promesa
User_1.UserModel.find({}, 'name id email')
    .then(function (users) {
    // `users` contiene un array de documentos de usuario
    console.log('Lista de usuarios:');
    console.log(users);
})
    .catch(function (err) {
    console.error('Error al buscar usuarios:', err);
});
// Find and Insert
User_1.UserModel.findOne({ id: 1 }).exec()
    .then(function (userFound) {
    console.log('User Found ' + userFound._id + ' ' + userFound.id);
    var newTodo = new Todo_1.TodoModel({ id: 2, user: userFound._id, name: "Test" });
    newTodo.save()
        .then(function (todo) { return console.log(' Todo Inserted ' + todo._id + ' ' + todo.id); })
        .catch(function (error) { return console.log(' Todo duplicated'); });
})
    .catch(function (error) {
    console.log('Error: Find and Insert');
});
// Populate
Todo_1.TodoModel.findOne({ id: 2 }).exec()
    .then(function (todoFound) {
    console.log(' Todo without Populate ' + todoFound);
})
    .catch(function (error) {
    console.log('Error: Todo without Populate');
});
Todo_1.TodoModel.findOne({ id: 2 }).populate('user').exec()
    .then(function (todoFound) {
    console.log(' Todo with Populate ' + todoFound);
})
    .catch(function (error) {
    console.log('Error: Todo with Populate');
});
/*
// Delete
TodoModel.deleteMany({}).exec()
    .then( () => console.log( ' Todo deleted '))
    .catch((error) => {
      console.log('Error: Delete');
    });

UserModel.deleteMany({}).exec()
    .then( () => console.log( ' User deleted '))
    .catch((error) => {
      console.log('Error: Delete');
    }); */ 
