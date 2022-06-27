import { NextPage, GetStaticProps } from 'next';

// Layout Component:
import { Layout } from '../components/layout';

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
        <ul>
          {
            pokemons.map(({ id, img, name }) => (

              <li key={id}>
                <h3> <strong>#{id}</strong> - {name}</h3>
                <a href={img}>{img}</a>
              </li>

            ))
          }
        </ul>


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
