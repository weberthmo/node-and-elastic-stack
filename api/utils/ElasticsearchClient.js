'use strict'

var elasticsearch = require('elasticsearch');



module.exports = {
  clientElk () {
    return new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    })
  }
}
