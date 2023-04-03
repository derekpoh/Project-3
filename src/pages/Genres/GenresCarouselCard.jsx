import { Image } from 'pure-react-carousel';
import {Link} from "react-router-dom"

const GenresCarouselCard = ({genre}) => {

    return (
        <div>
        <Link to={`/books/genres/${genre.genre}`}> 
        <Image 
        className='genre-image' 
        src={`${genre.image}`} 
        />  
        </Link> 
        </div>
    
    )
}

export default GenresCarouselCard