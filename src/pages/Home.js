import React, { Component } from 'react';
import Header from '../components/Header'
import Main from '../components/Main';
import Footer from '../components/Footer';
import Products from '../components/Products';

class Home extends Component {
  render() {
    return (
        <>
      <Header/>
      <Main/>
      <Products></Products>
      <Footer/>
      </>
    );
  }
}

export default Home