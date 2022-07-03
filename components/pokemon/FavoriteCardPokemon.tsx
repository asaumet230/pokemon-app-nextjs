import { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';


interface FavoriteCardPokemonPops {
    id: number;
}

export const FavoriteCardPokemon: FC<FavoriteCardPokemonPops> = ({ id }) => {

    const router = useRouter();

    const onFavoriteClick = (): void => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id} css={{ paddingTop: '20px', paddingBottom: '190px' }}>
            <Card isHoverable isPressable css={{ padding: '10px' }} onClick={onFavoriteClick}>
                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
            </Card>
        </Grid>
    )
}
