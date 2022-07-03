
export const toggleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    (favorites.includes(id)) ? favorites = favorites.filter( pokeId => pokeId !== id ) : favorites.push(id);

    localStorage.setItem('favorites', JSON.stringify( favorites ));
}

export const includeFavorites =( id: number): boolean => {

    if( typeof window === 'undefined') return false; // Este codigo asegura que no se corra en el servidor

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

export const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') || '[]');
    
}
