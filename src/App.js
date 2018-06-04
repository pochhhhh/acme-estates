import React, { Component } from 'react';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Listings from "./components/listings";
import Footer from "./components/footer";
import './App.css';
import "./style.css";

class App extends Component {

constructor(props){

super(props);

this.state = {




}


}

  render() {
    return (

      <div className="App">

<Header />

<section id="content-area">

<Sidebar />

<Listings/>

</section>

<Footer />


      </div>
    );
  }
}

export default App;