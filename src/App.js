import React, { Component } from 'react';

import Header from './components/Header';
import Card from './components/Card';
import GetData from './components/GetData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }


  dataFetch = async (movieData) => {
    let result = await movieData;
    if (result) {
      this.setState({
        data: result
      })
    }

  }




  render() {
    return (

      <div>
        <Header />
        <div className="container">
        <GetData requestData={this.dataFetch.bind(this)} />
        <Card moviesToList={this.state.data}/>
        </div>
      </div>

    );
  }
}

export default App;
