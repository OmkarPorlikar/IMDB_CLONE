import React from 'react'
import Opp_obj from '../../opp'
import useFetch from '../../useFetch'
import { useParams } from 'react-router-dom'
import './Movie.css'

export const Movie = () => {
    const {id} = useParams();
    const link = `${Opp_obj.Movie_Detail_Api}${id}${Opp_obj.Api_Key}`
    const {data , err, loading} = useFetch(link);
    console.log(data,"Movie Details page")
    console.log("The id is:-",id);
    const imgpath = Opp_obj.Image_Path;

    return (
        <> 
          
             
                <div  className='MovieDetail'>
                    <div className='Poster_Image'> 
                        <img src={imgpath + data.backdrop_path} className='backdropImage'/>
                        </div>
                        <div className='Details_overlay'>
                        <div className='Poster'>
                            <img src={imgpath+ data.poster_path} className='pImage'/>
                        </div>
                 
                            <div className='movie_detail'>
                              <div className='movie_title'> 
                                <h1 className='title'>{data.title} </h1>
                                <span className='overview'>{data.tagline} </span>
                                </div>
                                <div className='vote'>
                                   <span>   {data.vote_average}
                                    <i className='fa fa-star'></i>
                                    </span>
                                  <span> {`(${data.vote_count}) Votes`}</span>
                                   </div>
                                   <div className='runtime'>
                                    <p className='run'> {`${data.runtime} Min`} </p>
                                    <p className='release_date'>Release_date:- {data.release_date} </p>
                                     </div>
                                     <div className='map'>
                                      {(!data || !data.genres)? null :data.genres.map((val)=>(
                                        <div className='genres'>{val.name} </div>
                                      ))}
                                     </div>
                                      <div className='synopsis'>
                                        <h3 className='sync'> Synopsis</h3>
                                      <span> {data.overview} </span>
                                      </div>
                            </div>
                        </div>
                    
                </div>
          
        </>
    )
}
