import { NextPage } from 'next';

import { Button } from '@nextui-org/react';


const HomePage: NextPage = () => {

  const handlePress = (): void => {
    console.log('Hola mundo');
  }

  return (
    <>
      <Button
        color="gradient"
        onPress={handlePress}>
        Hola Mundo
      </Button>
    </>
  )
}

export default HomePage;
