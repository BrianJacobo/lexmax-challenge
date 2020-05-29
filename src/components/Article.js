import React from "react";
import './style/header.css'
import juve from './img/juventus.jpg'
import './style/article.css'

class Article extends React.Component {
  render() {
    return (
        <article className="article">
        <div className="article__img">
            <img className="article__img--product" src={juve} alt='img'/>
        </div>
        <div className="article__info">
            <p>Category</p>
            <h1>Product N°1</h1>
            <h3>
              Excepteur sint occaecat cupidatat non prodient, sun<br/> in culpa qui
              officia deserunt
            </h3>
            <h1>
              $200
            </h1>
            <button className="article__buy">ADD TO CART</button>
        </div>
      </article>
    );
  }
}

export default Article;
