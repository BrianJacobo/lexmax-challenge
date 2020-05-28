import React from 'react'
import './style/products.css'
import blue from './img/BLUE.png'

class Products extends React.Component{
    render(){
        return(
            <section class="products">
            <h2>All products</h2>
            <div class="products__items">
              <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                <div class="item">
                  <img class="item__img" src={blue} alt="blue"/>
                  <div class="item__details">
                    <p class="item__img--title">Product N°1</p>
                    <p class="item__img--subtitle">$200.00</p>
                    <button>View details</button>
                  </div>
                </div>
                
                
            </div>
          </section>
        )
    }
}

export default Products