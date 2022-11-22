const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let clienteSchema = require("../models/Cliente");

//crear cliente
router.route("/crear-clinte").post((req, res, next) => {
    clienteSchema.create(req.body, (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log(data);
        console.log("Cliente creado con exito");
        res.json(data);
      }
    });
  });
  
  //Leer cliente
  router.route("/listar-cliente").get((req, res, next) => {
    clienteSchema.find((error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  //actualizar cliente
  router.route("/actualizar-cliente/:id").put((req, res, next) => {
    clienteSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          console.log(error);
          return next(error);
        } else {
          console.log(data);
          console.log("Cliente actualizado con exito");
          res.json(data);
        }
      }
    );
  });

  //Borrar cliente
router.route("/borrar-cliente/:id").delete((req, res, next) => {
  clienteSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      console.log(data);
      console.log("cliente eliminado con exito");
      res.status(200).json({
        msg: data,
      });
    }
  });
});

  module.exports = router;