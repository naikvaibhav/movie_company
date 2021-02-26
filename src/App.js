import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
// import { Container } from 'react-bootstrap'
import Home from './pages/Home'
// import ProductList from './pages/ProductList'

const App = () => {
  return (
    <Router basename="/">
    <Header/>
    <main className="py-3">
    <Route path='/' component={Home} exact/>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;

