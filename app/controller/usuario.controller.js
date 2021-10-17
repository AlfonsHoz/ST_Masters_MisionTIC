const Usuario = require("../models/usuario");
const { response } = require("express");
const bcrypt = require("bcryptjs");

exports.obtenerUsuarios = async (req, res = response) => {
    try {
        const usuarios = await Usuario.find();

        res.status(200).json({
            ok: true,
            msg: "Lista de usuarios",
            usuarios,
        });
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno, hable con el administrador.",
        });
    }
};

exports.obtenerUnUsuario = async (req, res = response) => {
    try {
        const cod = req.params.cod;
        console.log(cod);
        const usuario = await Usuario.findOne({ email: cod.toString() });

        res.status(200).json({
            ok: true,
            msg: "Lista de usuarios",
            usuario,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno, hable con el administrador.",
        });
    }
};

// exports.o = async(req, callback) => {
//     const token = console.log('token', req.headers.authorization);
// }

exports.buscarPorRol = async (req, res = response) => {
    const rol = req.params.rol;
    const filtro = req.params.filtro;

    try {
        const usuarios = await Usuario.find({
            $or: [
                { rol: rol, email: filtro },
                { rol: rol, nombre: filtro },
            ],
        });

        res.status(200).json({
            ok: true,
            msg: "Lista de usuarios por rol",
            usuarios,
        });
    } catch (err) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno, hable con el administrador.",
        });
    }
};

exports.crearUsuario = async (req, res = response) => {
    const { email, nombre, rol, estado } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        console.log(usuario);

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: `El email '${email}' ya se encuentra registrado.`,
            });
        } else {

            const nuevoUsuario = new Usuario({ email, nombre, rol, estado });

            await nuevoUsuario.save();

            res.status(201).json({
                ok: true,
                msg: "Usuario registrado exitosamente.",
                nuevoUsuario,
            });
        }
    } catch (err) {
        // console.log(err);
        res.status(500).json({
            ok: false,
            msg: "Error interno, por favor hable con el administrador.", 
            err: err,
        });
    }
};

exports.actualizarUsuario = async (req, res = response) => {
    const email = req.params.id;

    try {
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con identificación (${email}).`,
            });
        }

        const nuevoUsuario = {
            ...req.body,
        };

        const usuarioActualizado = await Usuario.findOneAndUpdate(
            { email },
            nuevoUsuario
        );

        res.status(201).json({
            ok: true,
            msg: "Usuario actualizado exitosamente.",
            usuario: usuarioActualizado,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: "Error interno, hable con el administrador.",
        });
    }
};

exports.eliminarUsuario = async (req, res = response) => {
    const email = req.params.id;

    try {
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con identificación (${email}).`,
            });
        }

        await Usuario.findOneAndRemove({ email });

        res.status(200).json({
            ok: true,
            msg: "Usuario eliminado exitosamente.",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: "Error interno, hable con el administrador.",
        });
    }
};
