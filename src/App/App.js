import React, {Component} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./app.css";

import Header from '../Header'
import ContentContainer from '../ContentContainer';


export default class App extends Component {

  state = 
    
      {
      product:[
        { 
          id:1,
          name:"Belucci", 
          model:"BC3820" 
        },
        { 
          id:2,
          name:"Fabio", 
          model:"FAW702B" 
        },
        { 
          id:3,
          name:"Elitaro", 
          model:"E4011BC" 
        },
      ]
    }
    

  render () {
    const { product } = this.state;
    
    console.log(product);

    return (
      <Router>

      <div className="mainContainer">
        <Header />

        <ContentContainer product={product}/>
    
        <div className="footerContainer">
          <p>Footer for BestGuitarSite</p>
        </div>
    
      </div>
      </Router>
    );
  };
};