import './App.css';
import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Header from './Component/Header/header'
import Home from './Pages/Home/Home'
// import MovieList from './Component/MoviList/MovieList';
import MovieList from './Component/MoviList/MovieList';
import SearchMovies from './Component/Search/Search';
import { Movie } from './Pages/MoviePage/Movie';
import NotFoundPage from './Component/notFound/NotFoundPage';
function App() {
  return (
    <div className="App">

 <BrowserRouter>
 <Header/>

 <Routes> 
 <Route path='/' element= { <Home/>}> </Route>
  {/* we are using the dynamic route here */}
  <Route path='movie/:id'  element= {<Movie/>}> </Route>
  <Route path='movies/:type'  element= {<MovieList/>}> </Route>
  <Route path='/*' element= {<h1> Error Page </h1>}> </Route>
  <Route path='search' element={ <SearchMovies/>}> </Route>
  <Route component={NotFoundPage} />
  </Routes> 
 
 
 </BrowserRouter>

    </div>
  );
}

export default App;

