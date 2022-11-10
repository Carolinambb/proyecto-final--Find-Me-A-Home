const { Router } = require('express');
const {Op , where} = require ("sequelize");
const router = Router();
const { Product } = require('../db');
const products = require("../../../productos.json");
const { filtroProductos } = require("./controllers");

router.get("/", async (req, res) => {
      const {filtro, orden, nombre, tipo} = req.query;
    try{
      const allProducts= await Product.findAll();

      if(!allProducts.length){
        const productos= products.productos.map((p) => {
            return {
                nombre: p.nombre,
                descripcion: p.descripcion,
                precio: p.precio,
                imagen: p.imagen,
                stock: p.stock,
                tipo: p.tipo
            }
        });
        
        const createProduct= await Product.bulkCreate(productos);
        const creados = await Product.findAll();
        res.status(201).send(creados);
      }else{

        if(nombre){
            const nombreProducto= await Product.findAll({
                where: {
                    nombre: {
                        [Op.iLike] : "%" + nombre + "%"
                    }
                }
            })
            try{

                const productoNombre= await nombreProducto.map(p => {
                    return{
                        id: p.id,
                    nombre: p.nombre,
                    descripcion: p.descripcion,
                    imagen: p.imagen,
                    stock: p.stock,
                    precio: p.precio,
                    calificacion: p.calificacion,
                    tipo: p.tipo
                    }
                })
                res.status(200).send(productoNombre);
            }catch(error){
                res.status(400).send("producto no encontrado");
            }
        }else{

            const productos = await allProducts.map((p) => {
                return {
                    id: p.id,
                    nombre: p.nombre,
                    descripcion: p.descripcion,
                    imagen: p.imagen,
                    stock: p.stock,
                    precio: p.precio,
                    calificacion: p.calificacion,
                    tipo: p.tipo
                }
            })
            const filtrados= await filtroProductos(productos, filtro, orden, tipo);
            res.status(200).send(filtrados);
        }
      }
    }catch(error){
        res.status(400).send({error: error.message});
    }
})


router.post("/", async (req, res, next) => {
  const { nombre, descripcion, imagen, stock, calificacion, precio , tipo} = req.body;

  try {
    let nuevoProducto = await Product.create({
      nombre,
      descripcion,
      imagen,
      stock,
      calificacion,
      precio,
      tipo
    });
    res.status(200).send(nuevoProducto);
  } catch (error) {
    next(error);
  }
});


module.exports = router;