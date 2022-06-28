import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

// Axios Client:
import { pokeApi } from '../../api';

// Components:
import { Layout } from '../../components/layout';

// Interfaces:
import { Pokemon } from '../../interfaces';


interface PokemonPageProps {
    pokemon: Pokemon;
}


const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {


    return (
        <Layout>
            <h1>{pokemon.name}</h1>
        </Layout>
    )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map((_, i) => `${i + 1}`);

    return {
        paths: pokemon151.map((id) => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);


    return {
        props: {
            pokemon: data,
        }
    }
}

export default PokemonPage;
