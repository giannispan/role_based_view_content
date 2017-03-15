'use strict';

var Docs = require('./models/docs');
var User = require('./models/user');

var user1 = new User({
  username: 'gpanag',
  email: 'gpanag@test.com',
  password: 'password1',
  role: 'super_user',
  department: 'HR',
  created: new Date,
});

user1.save(function(err){
  if (err) throw err;

  var doc1 = new Docs({
    title: 'users 1 doc 1',
    text: 'users 1 doc 1 text',
    __userDepartment: 'HR'
  });

  doc1.save(function (err) {
    if (err) throw err;
  });
});

var user2 = new User({
  username: 'amichos',
  email: 'amichos@test.com',
  password: 'password2',
  role: 'simple_user',
  department: 'Sales',
  created: new Date
});

user2.save(function(err){
  if (err) throw err;

  var doc1 = new Docs({
    title: 'users 2 doc 1',
    text: 'users 2 doc 1 text',
    __userDepartment: 'Sales'
  });

  doc1.save(function (err) {
    if (err) throw err;
  });

  var doc2 = new Docs({
    title: 'users 2 doc 2',
    text: 'users 2 doc 2 text',
    __userDepartment: 'Sales'
  });

  doc2.save(function (err) {
    if (err) throw err;
  });
});

var user3 = new User({
  username: 'giannispan',
  email: 'giannispan@test.com',
  password: 'password3',
  role: 'simple_user',
  department: 'Development',
  created: new Date
});

user3.save(function(err){
  if (err) throw err;

  var doc3 = new Docs({
    title: 'users 3 doc 1',
    text: 'users 3 doc 1 text',
    __userDepartment: 'Development'
  });

  doc3.save(function (err) {
    if (err) throw err;
  });
});