


import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends ( Component ) {
  constructor(props){
    super(props);
    this.state = {
      quote: ""
    }
    
  }

  
  

  getquotes=()=>{
    
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then( res =>  
      this.setState({
        quote: res.data.message
      }))
    
    .catch( err => console.log(err))
    
  }
  render(){
    //console.log(this.state.quote)

    return (
      <div >
        <h1>Quotes</h1>
        <h5>{this.state.quote}</h5>
        <h5>{}</h5>
        <button onClick={this.getquotes}>New Quotes</button>
        </div>
    )
  }







  

  
 
}


  

export default App;




// https://www.youtube.com/watch?v=0IMz8d9Cby4
// Allow-Origin Response Header Explained (CORS)


//  https://www.youtube.com/watch?v=YJ7ZgGnhN5k
//  JavaScript Fetch with Request and Headers Objects






