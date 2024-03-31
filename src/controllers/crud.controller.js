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
        const pokemones = await Pokemon.find({ deleted: false }); // Consultamos solo los Pokémones que no han sido eliminados
        response.status(200).json({
            message: "Lista de Pokémones",
            data: pokemones
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

// Obtener un pokemon por su ID
export const obtenerPokemon = async (request, response) => {
    try {
        const id = request.params.id;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon || pokemon.deleted) {
            return response.status(404).json({
                message: "Pokémon no encontrado",
                data: null
            });
        }

        response.status(200).json({
            message: "Pokémon encontrado!",
            data: pokemon
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

// Modificar un pokemon por su ID
export const modificarPokemon = async (request, response) => {
    try {
        const id = request.params.id;
        const nuevoPokemon = request.body;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon) {
            return response.status(404).json({
                message: "Pokemon no encontrado",
                data: null
            });
        }

        if (pokemon.deleted) {
            return response.status(404).json({
                message: "No se puede modificar un Pokémon eliminado",
                data: null
            });
        }

        const pokemonModificado = await Pokemon.findByIdAndUpdate(id, nuevoPokemon, { new: true });

        response.status(200).json({
            message: "Pokemon actualizado correctamente!",
            data: pokemonModificado
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

// Eliminar un pokemon por su ID
export const eliminarPokemon = async (request, response) => {
    try {
        const id = request.params.id;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon) {
            return response.status(404).json("Pokemon no encontrado");
        }

        const pokeEliminado = await Pokemon.findByIdAndUpdate(
            id,
            { deleted: true }, // Establecemos el estado deleted a true
            { new: true }
        );

        response.status(200).json({
            message: "Pokemon eliminado con éxito",
            data: pokeEliminado
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
