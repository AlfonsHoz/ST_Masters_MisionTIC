const Usuario = require('../models/usuario');
const { response } = require('express');

exports.obtenerUsuarios = async (req, res = response) => {

    try {
        const usuarios = await Usuario.find({ estado: "activo" });

        res.status(200).json({
            ok: true,
            msg: 'Lista de usuarios',
            usuarios
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, hable con el administrador.'
        });
    }
}

exports.crearUsuario = async (req, res = response) => {

    const { identificacion, nombre, rol, estado, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ identificacion });

        console.log(usuario);

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: `El usuario con identificación '${identificacion}' ya se encuentra registrado.`
            });
        }

        usuario = new Usuario({ identificacion, nombre, rol, estado, password });

        await usuario.save();

        res.status(201).json({
            ok: true,
            msg: 'Usuario registrado exitosamente.',
            usuario
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, por favor hable con el administrador.'
        });
    }
}

exports.actualizarUsuario = async (req, res = response) => {

    const identificacion = req.params.id;

    try {

        let usuario = await Usuario.findOne({ identificacion });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con identificación (${identificacion}).`
            });
        }

        const nuevoUsuario = {
            ...req.body
        }

        const usuarioActualizado = await Usuario.findOneAndUpdate({ identificacion }, nuevoUsuario);

        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizado exitosamente.',
            usuario: usuarioActualizado
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, hable con el administrador.'
        });
    }


}

exports.eliminarUsuario = async () => {

}