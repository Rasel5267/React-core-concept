import React, { useState } from 'react';
import './App.css';

function App() {
  const products =[
    {name:'PhotoShop', details:'PhotoShop is a great application for photo editing.PhotoShop is a great application for photo editing.', price:'$9.99'},
    {name:'Illustrator', details:'Illustrator is a great application for photo editing.Illustrator is a great application for photo editing.', price:'$100'},
    {name:'PDF Reader', details:'PDF Reader is a great application for read pdf book.PDF Reader is a great application for read pdf book.', price:'$15.8'},
    {name:'PDF Reader', details:'PDF Reader is a great application for read pdf book.PDF Reader is a great application for read pdf book.', price:'$15.8'},
    {name:'PDF Reader', details:'PDF Reader is a great application for read pdf book.PDF Reader is a great application for read pdf book.', price:'$15.8'},
    {name:'PDF Reader', details:'PDF Reader is a great application for read pdf book.PDF Reader is a great application for read pdf book.', price:'$15.8'},
  ]
  return (
    <div className="App">
        <h1>Product Section</h1>
        <Counter></Counter>
        <div>
          {
            products.map(product =><Product product={product}></Product> )
          }
        </div>
        <h1>Product Section</h1>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const btnStyle ={
    padding:'8px 25px',
    fontSize:'18px',
    border:'2px solid gray',
    outline:'none',
    cursor:'pointer',
    borderRadius:'10px'
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button style= {btnStyle} onClick= {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    height:'350px',
    width:'400px',
    margin:'auto',
    marginLeft:'37px',
    marginTop:'30px',
    borderRadius:'10px',
    backgroundColor:'#dadada',
    float:'left'
  }
  const btnStyle ={
    padding:'8px 25px',
    fontSize:'18px',
    border:'2px solid #282c34',
    outline:'none',
    cursor:'pointer',
    borderRadius:'10px'
  }
  const {name, details, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>Name: {name}</h2>
      <p>{details}</p>
      <h3>Price: {price}</h3>
      <button style= {btnStyle}>Buy Now</button>
    </div>
  )
}


export default App;
