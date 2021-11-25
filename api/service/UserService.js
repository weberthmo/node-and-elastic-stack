'use strict';
const { clientElk } = require('../utils/ElasticsearchClient')

const index = 'users'
const clientElastic = clientElk()



exports.createUser = function(body) {
  console.log("createUser service")
  return new Promise(function(resolve, reject) {
    try {
      resolve(
        clientElastic.index(
          {
            index,
            body
          }
        )
      )
    } catch (error) {
      reject(error)
    }
  });
}

exports.deleteUser = function(id) {
  console.log("resolve")
  console.log(id)
  return new Promise(function(resolve, reject) {
  try {
    resolve(
      clientElastic.delete(
        {
          index,
          id
        }
      )
    )
  } catch (error) {
    console.log(error)
    reject(error)
  }
});
}


exports.getUserById = function(id_user) {
  return new Promise(function(resolve, reject) {
  try {
    resolve(
      clientElastic.get(
        {
          index,
          id: id_user
        }
      )
    )
  } catch (error) {
    console.log(error)
    reject(error)
  }
});
}

exports.getUserByAll = function(id_user) {
  return new Promise(function(resolve, reject) {
  try {
    resolve(
      clientElastic.search(
        {
          index
        }
      )
    )
  } catch (error) {
    console.log(error)
    reject(error)
  }
});
}


exports.updateUser = function(id_user,body) {
  return new Promise(function(resolve, reject) {
    try {
      resolve(
        clientElastic.update(
          {
            index,
            id: id_user,
            body: {
              doc:{
                name: body.name,
                description: body.description
              }
            }
            

          }
        )
      )
    } catch (error) {
      console.log(error)
      reject(error)
    }
  
  });
}

