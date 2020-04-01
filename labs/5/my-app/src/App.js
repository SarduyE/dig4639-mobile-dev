import React from 'react';
import './App.css';
import Card from  './components/card/index.js';
let WAPI = 'https://api.weather.gov/gridpoints/MLB/25,69/forecast';


class App extends React.Component {
  state = {
    weather: []    
  }
  fetchWeather() {
    fetch(WAPI)
    .then(response => response.json())
   .then(data => {
      let periods = data.properties.periods;
      console.log(data)
      this.setState({
        weather: periods
      });  } );
  } 
  componentDidMount() {
    this.fetchWeather();
  } render() {
    return(
      <>{console.log(this.state.weather)}
        {(this.state.weather).map(
            (state, i) => 
            <Card
                key={i} id={state.number} title={state.name}content={state.temperature} unit={state.temperatureUnit}
                description={state.detailedForecast}/>
        )}
      </>
    )
  }
}

export default App;