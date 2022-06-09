/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getAllArticulos: async function (req,res){
        var misArticulos=await Articulos.find();
        res.ok(misArticulos);
    },
    post: async function(req,res){
        var params=req.allParams();
        if(!params.nombre)
        return req.badRequest('El nombre es necesario');
        var resArticulos=await Articulos.create(params).fetch();
        return res.ok(resArticulos);
      },
      put: async function(req,res){
        var params=req.allParams();
        var id =params.id;
        delete params.id;

        var resArticulos = await Articulos.update({id:id}, params).fetch();
        return res.ok(resArticulos);
      },
      delete: async function(req,res){
        var id =req.params('id');
        var resArticulos = await Articulos.destroy({id:id}).fetch();
        return res.ok(resArticulos);
      }

};

