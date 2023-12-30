
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import Opp_obj from "../../opp";
import "./Card.css";

const imgpath = Opp_obj.Image_Path;

const Cards = ({ movie }) => {
  // console.log("Cards Component")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return   <> {
  
      isLoading ? <div className="cards">
      <SkeletonTheme baseColor="#00FF00" color='#00FF00' highlightColor="#444">
      
        <Skeleton height={300} width={200} duration={4} style={{ backgroundColor: '#00FF00' }} count={3} direction="ltr" enableAnimation={false} />
    
    </SkeletonTheme>
    </div>
       : (
        <NavLink to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <div className="cards">
            <img src={imgpath + movie.poster_path} className="cards__img" />
            <div className="cards__overlay">
              <div className="card__title">
                <h3>{movie ? movie.title : ""}</h3>
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
            </div>
          </div>
        </NavLink>
      )
   
}
</>
};

export default Cards;

// import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { NavLink } from "react-router-dom";
// import Opp_obj from "../../opp";
// import "./Card.css";



// const imgpath = Opp_obj.Image_Path;

// const Cards = ({ movie }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);
//   }, []);

//   return (
//     <div className="cards">
//       {isLoading ? (
//         // <SkeletonTheme color="#202020" highlightColor="#444">
//         //   <Skeleton height={300} duration={2} style={{ borderRadius: '10px' }} />
//         // </SkeletonTheme>
//         <SkeletonTheme color="#2196F3" highlightColor="#64B5F6">
//         <Skeleton height={300} duration={2} style={{ borderRadius: '10px' }} />
//       </SkeletonTheme>
      
//       ) : (
//         <NavLink to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
//           <img src={imgpath + movie.poster_path} className="cards__img" alt={movie.title} />
//           <div className="cards__overlay">
//             <div className="card__title">
//               <h3>{movie ? movie.title : ""}</h3>
//             </div>
//             <div className="card__runtime">
//               {movie ? movie.release_date : ""}
//               <span className="card__rating">
//                 {movie ? movie.vote_average : ""}
//                 <i className="fas fa-star" />
//               </span>
//             </div>
//             <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
//           </div>
//         </NavLink>
//       )}
//     </div>
//   );
// };

// export default Cards;
