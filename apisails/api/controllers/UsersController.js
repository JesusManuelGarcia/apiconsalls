/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Users = require("../models/Users");

module.exports = {
  
    getAllUsers: async function (req,res){
        var misUsuarios=await User.find();
        res.ok(misUsuarios);
    },
    post: async function(req,res){
        var params=req.allParams();
        if(!params.nombre)
        return req.badRequest('El nombre es necesario');
        var resUsers=await Users.create(params).fetch();
        return res.ok(resUsers);
      },
      put: async function(req,res){
        var params=req.allParams();
        var id =params.id;
        delete params.id;

        var resUsers = await Users.update({id:id}, params).fetch();
        return res.ok(resUsers);
      },
      delete: async function(req,res){
        var id =req.params('id');
        var resUsers = await Users.destroy({id:id}).fetch();
        return res.ok(resUsers);
      }

};

