import {heroes} from '../data/Heroes';


export const  getHeroesbyPublisher = ( publisher) => {
    const validPublischers = ['DC Comics','Marvel Comics'];

    if(!validPublischers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }
    
    return heroes.filter( heroe =>heroe.publisher === publisher);

}