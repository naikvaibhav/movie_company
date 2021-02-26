import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const MovieCard = ({movie, index}) => {
    const [wished, setWished] = useState(false)
    const styles= {
        color:'#b35a4e', 
        fontSize:'2rem'
    }
    
    const timeConvert = (durationInMinutes) => {
        const hours = (durationInMinutes / 60);
        const hoursWithMinInDec = Math.floor(hours);
        const minutes = (hours - hoursWithMinInDec) * 60;
        const actualMin = Math.round(minutes);
        return `${hoursWithMinInDec}h ${actualMin}min`;
    }

    return(
        <div key={index} className='card'>
            <img src={`/${movie.title}.jpeg`} alt={movie.title} />
            <div className='movie-info'>
                <p className='title'>{movie.title}</p>
                <p className='duration'>{timeConvert(movie.duration)} / {movie.genre}</p>
            </div>
            <div className='watch'>
                <a>watch trailer</a>
                {wished ? (<AiFillHeart style={styles} className='wishlist' onClick={() => setWished(false)}/>) : (<AiOutlineHeart style={styles} className='wishlist' onClick={() => setWished(true)}/>)}
            </div>
        </div>
    )
}

export default MovieCard