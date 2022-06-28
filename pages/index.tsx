import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

// Components:
import { Layout } from '../components/layout';
import { PokemonCard } from '../components/pokemon';

// Axios Client:
import pokeApi from '../api/pokeApi';

// Interfaces
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';



interface HomepageProps {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<HomepageProps> = ({ pokemons }) => {

  return (

    <Layout title="Listado de Pokémons">

      {
        <Grid.Container gap={2} justify='space-between'>
          {
            pokemons.map(pokemon => (

              <PokemonCard pokemon={pokemon} key={pokemon.id} />

            ))
          }
        </Grid.Container>


      }

    </Layout >

  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));


  return {
    props: {
      pokemons
    }
  }
}


export default HomePage;
