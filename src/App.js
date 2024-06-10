import React from "react";
import Navbar from'./components/navbar/Navbar';
import Header from './containers/header/Header';
import Brand from './components/brand/Brand';
import Whatgpt from './containers/whatgpt/Whatgpt';
import Feature from './components/feature/Feature';
import Possibility from './containers/possibility/Possibility';
import Cta from './components/cta/Cta';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import './App.css';
const App = () => {
  return (
    <div className="gradient-bg">
      <Navbar/>
      <Header/>
      <div className="second-gradient">
      <Brand/>
      <Whatgpt/>
      <Feature/>
      <Cta/>
      <Possibility/>
      <Blog/>
      <Footer/>
</div>
    </div>
  );
};

export default App;