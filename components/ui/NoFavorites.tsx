import React from 'react';
import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: '84vh',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        }}>
            <Text h1>No hay favoritos</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt="Ditto"
                css={{
                    width: '250px',
                    height: '250px',
                    opacity: '0.3',

                }} />
        </Container>
    )
}

