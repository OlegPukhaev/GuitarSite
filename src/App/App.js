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
      formData:{
        name:'',
        model:''
      },
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
      ],

    }
    
    onChangeField = (e) => {
      const {name, value} = e.target;
      const {formData} = this.state;
      this.setState({formData:{...formData,[name]:value}});
    }

    onSubmitForm = (e) => {
      e.preventDefault();
      const {formData, product} = this.state;
      const newId = product[product.length-1].id+1;
      const customFormData = {id: newId, ...formData }
      if (formData.name !== '' && formData.model !== '') {
        this.setState({product:[ ...product, customFormData ]});
        this.setState({formData:{name:'', model:''}});
      }
    }

  render () {
    const { product, formData } = this.state;
    return (
      <Router>
      <div className="mainContainer">
        <Header />

        <ContentContainer 
          product={product}
          onChangeField={this.onChangeField}
          onSubmitForm={this.onSubmitForm} 
          formData={formData}
        />
    
        <div className="footerContainer">
          <p>Footer for BestGuitarSite</p>
        </div>
    
      </div>
      </Router>
    );
  };
};