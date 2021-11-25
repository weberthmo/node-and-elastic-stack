'use strict';

var User = require('../service/UserService');
const apm = require('elastic-apm-node');


module.exports.createUser = function createUser (req, res, next) {
  const body = req.body
  User.createUser(body)
    .then(function (response) {
      return res.status(200).json({
        response
    });
    })
    .catch(function (response) {
      apm.captureError(response)
      return res.status(response.status).json(
        response
      );
    });
};

module.exports.deleteUser = function deleteUser (req, res) {
  const {id} = req.body
  console.log(id)
  User.deleteUser(id)
    .then(function (response) {
      return res.status(200).json({
        response
    });

    })
    .catch(function (response) {
      apm.captureError(response)
      return res.status(response.status).json(
        response
      );
    });
};
module.exports.getUserByAll = function getUserByAll(req, res){
  User.getUserByAll()
    .then(function (response) {
      console.log(response)
      return res.status(200).json({
        response
    });

    })
    .catch(function (response) {
    apm.captureError(response)
    return res.status(response.status).json(
      response
  );
  
  })
}

module.exports.getUserById = function getUserById (req, res) {
  const {id_user} = req.params
  console.log(id_user)
  User.getUserById(id_user)
    .then(function (response) {
      console.log(response)
      return res.status(200).json({
        response
    });

    })
    .catch(function (response) {
      apm.captureError(response)
      return res.status(response.status).json(
        response
      );
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  const {id_user} = req.params;
  const body = req.body;
  console.log(id_user);
  console.log(body);
  User.updateUser(id_user,body)
  .then(function (response) {
    console.log(response)
    return res.status(200).json({
      response
  });

  })
  .catch(function (response) {
    apm.captureError(response)
    return res.status(response.status).json(
      response
    );
  });
    
};
