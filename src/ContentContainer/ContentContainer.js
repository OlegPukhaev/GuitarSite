import React from 'react';
import './contentContainer.css';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  );
}

const AddProduct = () => {
  return(
    <div>
      <h1>Add Product Form</h1>
    </div>
  );
}

const ContentContainer = ({product}) => {
  console.log("Content container", product);
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
        <nav className="navbar navbar-light bg-light">
          <button type="button" className="btn btn-outline-success">Добавить товар</button>
        </nav>

        <Switch>
          <Route path="/products" exact>
            <ProductList product={product}/>
          </Route>
          <Route path="/clients">
            <AddProduct />
          </Route>

        </Switch>



        </div>

      </div>
  );
};

export default ContentContainer;