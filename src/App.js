import React, { Component } from 'react';
import './App.css';
import { inteliaWebsite, gdsaDashboard, diceShake, spacedWebsite  } from './images';

class App extends Component {
  render() {
    return (
      <section>

        <h1>Featued Projects</h1>
        <div className="row">
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src={inteliaWebsite} alt="Intelia Website" />
          </div>
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src={gdsaDashboard} alt="GDSA Dashboard" />
          </div>
        </div>

        <h1>Experiments</h1>
        <div className="row">
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src={diceShake} alt="Dice Shake" />
          </div>
          <div className="column-12 column-md-6 portfolio-item">
            <img className="portfolio-cover" src={spacedWebsite} alt="Spaced Website" />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
