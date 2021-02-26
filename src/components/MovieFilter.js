import React from 'react'

const MovieFilter = ({genreList, activeGenre, selectGenre}) => {
    return(
        <>
        <p className='filter'>Filters</p>
       
        <ul className='movie-filter-list'>
        {
            genreList.map(genre => <li className={activeGenre === genre ? 'active' : 'inactive'} key={genre} onClick={(e)=>selectGenre(genre)}>{genre}</li>)
        }
        </ul>
        </>
    )
}

export default MovieFilter