// import React from 'react'
// import useFetch from '../../useFetch'
// import Cards from '../Cards/Cards'
// import { useState, useEffect } from 'react'
// import Opp_obj from '../../opp'
// // import './react-router-dom'
// import { useParams } from 'react-router-dom'
// import './movieList.css'
// export default function MovieList () {
//     const {type} = useParams();
//     const jojo = type;
//     console.log("Jojo variable", jojo)
//     const teppo = type? Opp_obj[jojo] :Opp_obj.popular
//     console.log("Teppo Variable",teppo)
//     const {data , err, loading} = useFetch(teppo)
//   console.log(data.results,"list")
//       return (
//     <div className='movie__list'>
//         <h2 className='list__title'> {(jojo? jojo:"POPULAR").toUpperCase()}</h2>
//         <div className="list__cards"> 
//         {
//            (!data || !data.results)? null: data.results.map((movie)=> 
//                 <Cards movie={movie}/>
//             )
//         }
//         </div>
//     </div>
//   )
// }






// this code is able to perfomr the infite scroll however the it is fetching the similar data

// import React, { useState, useEffect } from 'react';
// import Cards from '../Cards/Cards';
// import Opp_obj from '../../opp';
// import { useParams } from 'react-router-dom';
// import './movieList.css';

// export default function MovieList() {
//     const { type } = useParams();
//     const jojo = type;
//     const teppo = type ? Opp_obj[jojo] : Opp_obj.popular;

//     const [data, setData] = useState({ results: [] });
//     const [loading, setLoading] = useState(true);

//     const handleScroll = () => {
//         if (
//             window.innerHeight + document.documentElement.scrollTop ===
//             document.documentElement.offsetHeight
//         ) {
//             fetchData();
//         }
//     };

//     useEffect(() => {
//         fetchData();
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [jojo, type]);

//     const fetchData = async () => {
//         try {
//             setLoading(true);
//             const response = await fetch(teppo);
//             const newData = await response.json();
//             setData(prevData => ({ results: [...prevData.results, ...newData.results] }));
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='movie__list'>
//             <h2 className='list__title'> {(jojo ? jojo : 'POPULAR').toUpperCase()}</h2>
//             <div className="list__cards">
//                 {data.results.map((movie) =>
//                     <Cards movie={movie} key={movie.id} />
//                 )}
//             </div>
//             {loading && <div>Loading...</div>}
//         </div>
//     );
// }

// Another modified code 

import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Opp_obj from '../../opp';
import { useParams } from 'react-router-dom';
import './movieList.css';

const Api_Key ='?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

export default function MovieList() {
    const { type } = useParams();
    const jojo = type;
    const teppo = type ? Opp_obj[jojo] : Opp_obj.popular;

    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState({ results: [] });
    const [err, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${teppo}&page=${pageNumber}`);
                const user = await response.json();
                console.log(user,"user data")
                setData(prevData => ({  results: [...prevData.results, ...user.results] }));
            } catch (error) {
                setError(error);
            }
        }
            fetchData();
        function handleScroll() {
          // console.log(window)
          console.log(document.documentElement.clientHeight,"Inner height")
          console.log(document.documentElement.scrollTop,"Scroll Top")
          console.log(document.documentElement.clientHeight + document.documentElement.scrollTop,"addition")
          console.log( document.documentElement.offsetHeight,"offSetHeight")
            if (
                Math.ceil(document.documentElement.clientHeight + document.documentElement.scrollTop) >=
                Number.parseInt(document.documentElement.scrollHeight)
            ) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pageNumber]);
 
  useEffect(()=>{
    async function fetchData() {
      try {
          const response = await fetch(`${teppo}&page=${1}`);
          const dotoo = await response.json();
          // console.log(us,"user data")
          // setData(prevData => ({  results: [...prevData.results, ...user.results] }));
          setData( {  results: [ ...dotoo.results] });
      } catch (error) {
          setError(error);
      }
  }
      fetchData();
    
  }, [type])
    return (
        <div className='movie__list'>
            <h2 className='list__title'> {(jojo ? jojo : 'POPULAR').toUpperCase()}</h2>
            <div className="list__cards">
                {data.results.map((movie,index) => (
                    <Cards movie={movie} key={index} />
                ))}
            </div>
        </div>
    );
}
