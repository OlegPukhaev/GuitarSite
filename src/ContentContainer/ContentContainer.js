import React from 'react';
import './contentContainer.css';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AddProduct from '../AddProduct';

const RenderListItems = (props) => {
  const {product} = props;
  return product.map((item)=>{
    const {id} = item;
    const label = props.renderItem(item);
    return (
      <li key={id}>
        {label}
      </li>
      );

    });
}

const ProductList = ({product}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
      <Link to="/addproduct" className="btn btn-outline-success">
        Добавить товар
      </Link>
    </nav>
      <ul>
        <li key="header">id - Name - Model</li>
        <RenderListItems 
          product={product}
          renderItem={({id, name, model}) => {
            return (
            <span className="itemClass">
              <div className="idClass">{id}</div>
              <div>{name}</div>
              <div>${model}</div>
            </span>);
          }
          }
        />
      </ul>
    </div>
  );
}


const ClientList = () => {
  return(
    <div>
      <h1>All Clients Here</h1>
    </div>
  );
}

const ContentContainer = ({product, onChangeField, onSubmitForm, formData}) => {
  return (
      <div className="contentContainer">

        <div className="leftMenu">
          <ul className="list-group">
              <Link className="myStyle" to="/products">
                <li className="list-group-item active">
                    Товары
                </li>
              </Link>
              <Link to="/clients">
                <li className="list-group-item">
                    Заказы
                </li>
              </Link>
          </ul>  
        </div>
        <div className="contentArea">

        <Switch>
          <Route path="/products" exact>
            <ProductList product={product}/>
          </Route>
          <Route path="/addproduct">
            <AddProduct onChangeField={onChangeField} onSubmitForm={onSubmitForm} formData={formData}/>
          </Route>
          <Route path="/clients">
            <ClientList />
          </Route>
        </Switch>
        </div>
      </div>
  );
};

export default ContentContainer;