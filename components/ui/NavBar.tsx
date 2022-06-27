import Link from "next/link";
import { Spacer, useTheme } from '@nextui-org/react';
import Image from "next/image";



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
            <Image
                src="/pokemonLogo.png"
                alt="Pokémon Icon"
                width={50}
                height={50}
            />
            <h2>P</h2>
            <h3>okémon</h3>
            <Spacer css={{ flex: 1 }} />

            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a> Inicio </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
