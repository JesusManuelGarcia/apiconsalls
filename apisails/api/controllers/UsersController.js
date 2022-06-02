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
    }

};

