import React from 'react';
import Home from './routes/Home';
import './App.css';

function App(){
  return <Home />;
}

export default App;









/*import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import './App.css';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
   const {
     data : {
       data : { movies },
     },
   } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
   this.setState({ movies, isLoading: false }) ;
  };
  componentDidMount(){
    // 영화 데이터 로딩
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
            ))}
          </div>
        )}
      </section>
    );
  }
}



export default App;
*/

/*
//구조 분해 할당
//객체에 있는 키값을 편하게 추출할 수 있게 해주는 자바스크립트 문법  

function Food(props){
  {fav}=props;
  return <h1>I like {fav}</h1>;
}

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

*/