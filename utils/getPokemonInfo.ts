// Axios Client:
import { pokeApi } from "../api";

// Interface:
import { Pokemon } from "../interfaces";



export const getPokemonInfo = async ( nameOrID = '' ) => {

    try {
        
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`);
    
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        };
        
    } catch (error) {
        return null;   
    }


}