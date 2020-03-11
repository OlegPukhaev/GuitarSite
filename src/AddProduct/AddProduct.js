import React from 'react';
import {useHistory} from 'react-router-dom';

function AddProduct(props){
    const {onChangeField, onSubmitForm, formData:{name, model}} = props;
    let history = useHistory();

    const onItemSubmit = (e) => {
      history.push("/products");
      onSubmitForm(e);
    }

    return (
      <div>
        <h1>Add Product Form</h1>
        <form onSubmit={onItemSubmit}>
          <div className="form-group">
            <label htmlFor="guitarLabel">Название гитары</label>
            <input name="name" id="guitarLabel" type="text"  className="form-control" onChange={onChangeField} value={name}/>
          </div>
          <div className="form-group">
            <label htmlFor="guitarModel">Модель гитары</label>
            <input name="model" id="guitarModel" type="text" className="form-control" onChange={onChangeField} value={model}/>
          </div>
          <button type="submit" className="btn btn-primary" >Добавить</button>
        </form>
      
      </div>
      );
};

export default AddProduct;