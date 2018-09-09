import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>

        <h1>Featued Projects</h1>
        <div className="row">
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src="images/intelia-website.jpg" alt="Intelia Website" />
          </div>
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src="images/gdsa-dashboard.jpg" alt="GDSA Dashboard" />
          </div>
        </div>

        <h1>Experiments</h1>
        <div className="row">
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src="images/dice-shake.jpg" alt="Dice Shake" />
          </div>
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src="images/spaced-website.jpg" alt="Dice Shake" />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
