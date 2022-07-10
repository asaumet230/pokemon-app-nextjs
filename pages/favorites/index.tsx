import { useState, useEffect } from 'react';
import { NextPage } from 'next';


// Components:
import { Layout } from '../../components/layout';
import { NoFavorites } from '../../components/ui';
import { FavoritePokemons } from '../../components/pokemon';

//Utils:
import { pokemons } from '../../utils';



const FavoritesPage: NextPage = () => {

    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(pokemons());
    }, []);

    return (

        <Layout title='Pokémons - Favoritos'>

            {
                favoritesPokemons.length > 0 ?
                    (
                        <FavoritePokemons pokemons={favoritesPokemons} />
                    ) :
                    (
                        <NoFavorites />
                    )
            }

        </Layout>
    )
}

export default FavoritesPage;