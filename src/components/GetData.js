import React, { Component } from 'react';
import axios from 'axios';
const apiCall =`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

class GetData extends Component {

  fetchData = (e) => {
    e.preventDefault();
    this.props.requestData(
      axios.get(apiCall)
      .then(function(response) {
        return response.data.results;
      })

    );
  }

  render() {
    return (
      <div>
        <h2>Click the Button Below to Show a List of Movies</h2>
        <button type="button" onClick={this.fetchData} className="btn btn-primary" style={{ margin: "1rem auto", display: "block" }}>Show Movies</button>
      </div>
    )
  }

}

export default GetData;
