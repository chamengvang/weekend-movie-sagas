import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import DetailsPage from '../DetailsPage/DetailsPage.jsx';
import Header from '../Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path="/detailsPage/:id">
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
