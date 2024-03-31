"use strict";

import express from 'express';
import {
    crearPokemon,
    modificarPokemon,
    eliminarPokemon,
    obtenerPokemones
} from '../controllers/crud.controller.js';

const router = express.Router();


// Petición post para crear un pokemon
//! http://localhost:3000/api/pokemon/crear
router.post('/crear', crearPokemon);


// Petición put para modificar a un pokemon mediante el id
//! http://localhost:3000/api/pokemon/modificar/1
router.put('/modificarHistorico/:id', modificarPokemon);


// Petición delete para eliminar a un pokemon mediante el id
//! http://localhost:3000/api/pokemon/eliminar/1
router.delete('/eliminarHistorico/:id', eliminarPokemon);


// Petición get para traer a todos los pokemones
//! http://localhost:3000/api/pokemon/todos
router.get('/todos', obtenerPokemones);

export default router;