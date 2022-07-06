import { FC } from 'react';
import Head from "next/head";

// Components:
import { Footer, NavBar } from '../ui';

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
    title?: string;

}


// Este codigo es para la imagen que se coloca cuando se comparte esta pagina:
const origin = (typeof window === 'undefined') ? '' : window.location.origin;


export const Layout: FC<LayoutProps> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{`${title || 'Pokémon App'}`} </title>
                <meta name="author" content="Andres Felipe Saumet" />
                <meta name="description" content={`Información del pokémon: ${title}`} />
                <meta name="keywords" content={`${title}, pokémon, pokedex`} />

                <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

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

