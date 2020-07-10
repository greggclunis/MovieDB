import React, { Component } from 'react';
let maxMovies = 8;
const imageURL = "http://image.tmdb.org/t/p/w500";
class Card extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  componentDidUpdate() {
    let movies = this.props.moviesToList
    movies.length = 8;
    if (maxMovies === movies.length) {
      this.setState({
        movie: movies
      })

      maxMovies++;
    }

  }

  render() {

    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {this.state.movie.map((movie, index) => (
          <div key={index} className="card" style={{ flex: "1 0 44%", margin: "2rem 1rem"}}>
            <img  src={imageURL + movie.poster_path} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>{movie.title}</h3>
              <p className="card-text">
              {movie.overview}
              </p>
            </div>
          </div>


        ))}
      </div>
    );
}
}




export default Card;
