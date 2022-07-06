import { useState } from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

// Axios Client:
import { pokeApi } from '../../api';

// Components:
import { Layout } from '../../components/layout';

// Interfaces:
import { Pokemon } from '../../interfaces';
import Image from 'next/image';

// Utils:
import { toggleFavorite, includeFavorites, getPokemonInfo } from '../../utils';



interface PokemonPageProps {
    pokemon: Pokemon;
}


const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(includeFavorites(pokemon.id));


    const onToggleFavorites = () => {

        toggleFavorite(pokemon.id);
        setIsFavorite(!isFavorite);

        if (isFavorite) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })

    }


    // console.log({ existe: typeof window }); Estas variables se renderizan del lado del servidor de node

    return (
        <Layout title={pokemon.name}>

            <Grid.Container css={{ marginTop: '20px', paddingBottom: '380px' }} gap={2} >

                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || './no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200} />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card css={{ padding: '10px 30px' }}>

                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>

                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color="gradient"
                                onClick={onToggleFavorites}
                                ghost={!isFavorite}>
                                {isFavorite ? 'En Favoritos' : 'Guardar En Favoritos'}
                            </Button>

                        </Card.Header>

                        <Card.Body css={{ padding: '5px 20px' }}>
                            <Text size={30}>Sprites: </Text>

                            <Container display='flex' justify='center'>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />

                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />

                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />

                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />

                            </Container>

                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </Layout >
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

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        }
    }
}

export default PokemonPage;
