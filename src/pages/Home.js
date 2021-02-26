import React, { useEffect, useState } from 'react'
// import Axios from 'axios'

//import components
import MovieSearch from '../components/MovieSearch'
import MovieFilter from '../components/MovieFilter'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const [genreList, setGenreList] = useState(['All', 'Comedy', 'Thriller', 'Horror', 'Drama', 'Fantasy', 'Animation'])
    const [activeGenre, setActiveGenre] = useState(genreList[0])
    const [movieList, setMovieList] = useState([
        {
            "title": "Avengers: Endgame",
            "duration": 135,
            "genre": "Action"
        },
        {
            "title": "After",
            "duration": 150,
            "genre": "Drama"
        },
        {
            "title": "The Hole in the Ground",
            "duration": 125,
            "genre": "Horror"
        },
        {
            "title": "Dragon: The hidden world",
            "duration": 185,
            "genre": "Animation"
        },
        {
            "title": "Hellboy",
            "duration": 115,
            "genre": "Thriller"
        },
        {
            "title": "A star is born",
            "duration": 135,
            "genre": "Fantasy"
        }
    ])
    const [filteredMovieList, setFilteredMovieList] = useState([])
    const [searchedMovieList, setSearchedMovieList] = useState([])
    const [filterTabClicked, setFilterTabClicked] = useState(false)
    const [movieCount, setMovieCount] = useState(movieList.length)

    const URL = 'https://us-east4-frapp-prod.cloudfunctions.net/dumdum-brand-details'

    const styles={
        color: '#ffff',
        padding: '1% 0'
    }

    const getMovieCollection = () => {
        const data = { label: 'movie' };
        const headers = {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            // "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Origin": "*",
        };
        // Axios({
        //     method: "post",
        //     url: `https://crossorigin.me/${URL}`,
        //     headers: headers,
        //     data: data,
        //     mode: "cors"
        //     // headers: {
        //     //     "Access-Control-Allow-Origin": "http://todo.naikvaibhav.online",
        //     //     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        //     // },
        //     // mode: "cors"
        //   }).then(response=>console.log(response)).catch(err=> console.log(err))


          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          let req = new Request(URL, {
            method: 'POST',
            body: JSON.stringify(data)
          });

          fetch(req)
          .then(response => response.json())
          .then((contents) => {
            console.log(JSON.parse(contents))
          })
          .catch(() => console.log("Can’t access " + " response. Blocked by browser?"))
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         mode: 'no-cors',
    //         body: JSON.stringify(data)
    //     };

    //     fetch(`${URL}`, requestOptions).then((response) => response.json())
    //     .then((responseJson) => {
    //             console.log(responseJson);
    //             return responseJson
    //  });
    }

    useEffect(()=> {
        // getMovieCollection()
        const data = {
            "list": [
                {
                    "title": "Avengers: Endgame",
                    "duration": 135,
                    "genre": "Action"
                },
                {
                    "title": "After",
                    "duration": 150,
                    "genre": "Drama"
                },
                {
                    "title": "The Hole in the Ground",
                    "duration": 125,
                    "genre": "Horror"
                },
                {
                    "title": "Dragon: The hidden world",
                    "duration": 185,
                    "genre": "Animation"
                },
                {
                    "title": "Hellboy",
                    "duration": 115,
                    "genre": "Thriller"
                },
                {
                    "title": "A star is born",
                    "duration": 135,
                    "genre": "Fantasy"
                }
            ],
            "createdAt": "2021-02-25T12:25:25.921Z",
            "updatedAt": "2021-02-25T12:25:25.921Z"
        }
    },[])

    const getSearchText = (searchValue) => {
        setFilteredMovieList([])
        setActiveGenre(genreList[0])
        setFilterTabClicked(false)
        if(searchValue == ''){
            setSearchedMovieList([])
            return true
        }
        const tempCollection = movieList.filter(movie => movie.title.toLowerCase().includes(searchValue))
        setSearchedMovieList([...tempCollection])
        setMovieCount(tempCollection.length)
    }
    
    const selectGenre = (genreSelected) => {
        setActiveGenre(genreSelected)
        setSearchedMovieList([])
        const tempCollection = genreSelected !== genreList[0] ? movieList.filter(movie => movie.genre.toLowerCase() === genreSelected.toLowerCase()) : movieList
        setFilteredMovieList([...tempCollection])
        setFilterTabClicked(!filterTabClicked)
        setMovieCount(tempCollection.length)
    }

    const renderHomePage = () => {
        return(
            <>
            <div className='app-ui'>
            <div className="movie-filter">
                <MovieFilter genreList={genreList} activeGenre={activeGenre} selectGenre={selectGenre}/>
            </div>
            <div className="move-list">
                <MovieSearch getSearchText={getSearchText}/>
                <p style={styles}>{movieCount} movie(s) found</p>
                <div className='movie-card-grid' style={{color: '#ffff'}}>
                {(() => {
                    if (filteredMovieList.length > 0){
                      return filteredMovieList.map((movie,i) => <div key={i}><MovieCard movie={movie} index={i}/></div>)
                    }else if (filterTabClicked && filteredMovieList.length === 0) {
                      return <h1>No movie found for selected genre</h1>
                    }else if (searchedMovieList.length > 0){
                      return searchedMovieList.map((movie,i) => <div key={i}><MovieCard movie={movie} index={i}/></div>)
                    }else{
                      return movieList.map((movie,i) => <div key={i}><MovieCard movie={movie} index={i}/></div>)
                    }
                })()}
                </div>
            </div>  
            </div>
            </>
        )
    }

    return renderHomePage()
    
}

export default Home