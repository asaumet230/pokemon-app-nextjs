import { FC } from 'react';
import Head from "next/head";

// Components:
import { Footer, NavBar } from '../ui';

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
    title?: string;

}


export const Layout: FC<LayoutProps> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{`${title || 'Pokémon App'}`} </title>
                <meta name="author" content="Andres Felipe Saumet" />
                <meta name="description" content={`Información del pokémon: ${title}`} />
                <meta name="keywords" content={`${title}, pokémon, pokedex`} />
            </Head>

            <NavBar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>

            <Footer />

        </>
    )
}

