import express from 'express';
import {
    crearPokemon,
    modificarPokemon,
    eliminarPokemon,
    obtenerPokemones,
    obtenerPokemon 
} from '../controllers/crud.controller.js';

const router = express.Router();

// Petición post para crear un pokemon
router.post('/crear', crearPokemon);

// Petición put para modificar a un pokemon mediante el id
router.put('/modificarHistorico/:id', modificarPokemon);

// Petición delete para eliminar a un pokemon mediante el id
router.delete('/eliminarHistorico/:id', eliminarPokemon);

// Petición get para traer a todos los pokemones
router.get('/todos', obtenerPokemones);

// Petición get para obtener un pokemon por su ID
router.get('/pokemon/:id', obtenerPokemon); // Agregamos la ruta para obtener un pokemon por su ID

export default router;
