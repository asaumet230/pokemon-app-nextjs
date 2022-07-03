import { FC } from 'react';
import { Grid } from '@nextui-org/react';

// Components:
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface FavoritePokemonsProps {
    pokemons: number[];
}

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start" css={{ paddingBottom: '300px' }}>
            {
                pokemons.map(id => (

                    <FavoriteCardPokemon id={id} key={id} />

                ))
            }
        </Grid.Container>
    )
}
