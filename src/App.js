import './App.css';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Movie from './components/Movie/Movie';
import movies from './movie.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      {
        movies.map((element) =>{
          return(
            <Movie 
          title ={element.Title}
          year ={element.Year}
          img = {element.Poster}
          />
          )
          
        })
      }
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
