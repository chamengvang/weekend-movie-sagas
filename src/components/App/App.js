import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import DetailsPage from '../DetailsPage/DetailsPage.jsx';
import Header from '../Header/Header.jsx';
import AddMoviePage from '../AddMoviePage/AddMoviePage.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>        
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/detailsPage/:id">
          <DetailsPage />
        </Route>
        <Route exact path="/addMovie">
          <AddMoviePage />
        </Route>
      </Router>
    </div>
  );
}


export default App;
