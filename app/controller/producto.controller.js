const { response } = require('express');
const Producto = require('../models/producto');

exports.obtenerProductos = async (req, res = response) => {
    try {
        const productos = await Producto.find();

        res.status(200).json({
            ok: true,
            msg: 'Lista de productos',
            productos 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, hable con el administrador.'
        });
    }

}


exports.crearProducto = async (req, res = response) => {

    const { codigo_producto, nombre_producto, precio_unitario } = req.body;

    try {

        let producto = await Producto.findOne({codigo_producto});
        console.log(producto)
        if (producto) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya se encuentra registrado un producto con este código.'
            });
        }

        producto = new Producto({ codigo_producto, nombre_producto, precio_unitario });

        await producto.save();

        res.status(201).json({
            ok: true,
            msg: 'registro',
            producto
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, por favor hable con el administrador.'
        });
    }

}

exports.actualizarProducto = async (req, res = response) => { //
    const codigo = req.params.codigo_producto;

    try{

        let producto = await Producto.findOne({codigo});

        if (!producto) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el producto con código (${codigo})`
            });
        }
        
        const nuevoProducto = {
            ...req.body
        }

        const productoActualizado = await Producto.findOneAndUpdate({ codigo }, nuevoProducto );

        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizado exitosamente.',
            producto: productoActualizado
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, hable con el administrador.'
        });
    }
}
    
/*    res.status(200).send('Usuario actualizado');
    } catch (error) {
        res.status(400).send("No se pudo actualizar el usuario");
    }
}

exports.delete = ('/:id', async(req, res) => {
    try{
        let id = req.params.id;
        await db.Producto.destroy({
            where: {
                id,
            },
        })
        res.status(200).send("Usuario eliminado correctamente");
    } catch (error){
    res.status(400).send("No se pudo eliminar el usuario");
    }
})*/
