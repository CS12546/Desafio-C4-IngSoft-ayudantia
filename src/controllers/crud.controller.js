// crud.controller.js

import Pokemon from '../models/pokemones.models.js';

// Crear un pokemon
export const crearPokemon = async (request, response) => {
    try {
        const nuevoPoke = new Pokemon(request.body);
        const pokeGuardado = await nuevoPoke.save();
        response.status(201).json({
            message: "Pokémon creado exitosamente!",
            data: pokeGuardado
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

// Obtener a todos los pokemones
export const obtenerPokemones = async (request, response) => {
    try {
        const pokemones = await Pokemon.find(); // Consultamos todos los Pokémones de la base de datos
        response.status(200).json({
            message: "Lista de Pokémones",
            data: pokemones
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


// Modificar a un pokemon por su ID
export const modificarPokemon = async (request, response) => {
    try {
        const id = request.params.id;
        const nuevoPokemon = request.body;
        const pokemonModificado = await Pokemon.findByIdAndUpdate(id, nuevoPokemon, { new: true });

        if (!pokemonModificado) {
            return response.status(404).json({
                message: "Pokemon no encontrado",
                data: null
            });
        }

        response.status(200).json({
            message: "Pokemon actualizado correctamente!",
            data: pokemonModificado
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

// Eliminar a un pokemon por su id
export const eliminarPokemon = async (request, response) => {
  try {
        const id = request.params.id;
        const poke = await Pokemon.findById(id);

        if (!poke){
        return response.status(404).json("Pokemon no encontrado");
        }
    
    const pokeEliminado = await Pokemon. findByIdAndDelete(
        id,
        {$set: {deleted: true}},
        {new: true}
    );

    response.status(200).json({
        message: "Pokemon eliminado con exito",
        data: pokeEliminado
    })

  }catch (error){
    response.status(500).json( {message: error.message});   
  }
}
  
    

