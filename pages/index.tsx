import { NextPage, GetStaticProps } from 'next';

// Layout Component:
import { Layout } from '../components/layout';

interface HomepageProps {
  logo: string;
}

const HomePage: NextPage<HomepageProps> = (props) => {


  return (

    <Layout
      title="Listado de Pokémons">

    </Layout >

  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  console.log('getStaticProps');

  return {
    props: {

    }
  }
}


export default HomePage;
