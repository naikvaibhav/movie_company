import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const MovieSearch = ({getSearchText}) => {
    const styles = {
        color: '#c0ad85'
    }
    const handleChange = (e) => {
        getSearchText(e.target.value)
    }
    return(
        <>
        <div className='searchContainer search-input'>
        <div className='searchIcon'><AiOutlineSearch style={styles}/></div>
        <input className='searchBox' type="search" name="search" placeholder="Search..." onChange={handleChange}/>
        </div>
        </>
    )
}

export default MovieSearch