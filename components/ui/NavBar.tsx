import NextLink from "next/link";
import Image from "next/image";
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';



export const NavBar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '5px 20px',
            backgroundColor: theme?.colors.blue50.value

        }}>


            <NextLink href="/" passHref>

                <Link css={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Image
                        src="/pokemonLogo.png"
                        alt="Pokémon Icon"
                        width={50}
                        height={50}
                    />
                    <Link>
                        <Text h2>P</Text>
                        <Text h3>okémon</Text>
                    </Link>
                </Link>

            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <nav>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <li style={{ marginRight: '10px' }}>
                        <NextLink href="/" passHref>
                            <Link css={{ color: 'white', fontWeight: 'bold' }}>
                                Home
                            </Link>
                        </NextLink>
                    </li>
                    <li>
                        <NextLink href='/favorites' passHref>
                            <Link css={{ color: 'white', fontWeight: 'bold' }} >
                                Favorites
                            </Link>
                        </NextLink >
                    </li>
                </ul>
            </nav>
        </div >
    )
}
