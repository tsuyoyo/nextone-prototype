/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      // required: true,
      autoIncrement: true,
      unique: true
    },

    name: {
      type: 'string'
      // required: true
    },

    url: {
      type: 'string'
    },

    description: {
      type: 'text'
    }

  }
};

