import React from 'react'
import './Home.css'
import useFetch from '../../useFetch'
import Opp_obj from '../../opp'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router-dom'

import MovieList from '../../Component/MoviList/MovieList'
// import MovieList from '../../Component/MoviList/movieList'
// import Movie from './Movie/Movie'
export const Home = () => {
  console.log("Home Component")
     const imgpath = Opp_obj.Image_Path;
    console.log()
 const {data,err, loading } = useFetch(Opp_obj.popular)
 console.log(data.results)
    return (

<div>
<Carousel autoPlay={Boolean}
showThumbs={false}
infiniteLoop={true}
transitionTime={3}
showStatus={false}
>
    {
        (!data || !data.results)? null:
        data.results.map(movie => (
            <NavLink style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.title} />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">{movie ? movie.original_title : ""}</div>
                <div className="posterImage_runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage_rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="posterImage_description">{movie ? movie.overview : ""}</div>
              </div>
            </NavLink>
          ))
        }
</Carousel>
<MovieList/>
    </div>
  )
}

export default Home