import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';

// Interfaces:
import { SmallPokemon } from '../../interfaces';



interface PokemonCardProps {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {

    const { id, name, img } = pokemon;

    const router = useRouter();

    const onClick = () => {

        router.push(`/pokemon/${id}`);

    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} onClick={onClick}>
            <Card isHoverable isPressable>

                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img} />
                </Card.Body>

                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>

            </Card>
        </Grid>
    )
}
