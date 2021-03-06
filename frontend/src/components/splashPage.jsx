import React from 'react';
import BartMap from './map/map.jsx';
import Search from './search/search.jsx';
import Attractions from './attractions/attractions.jsx';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  //default to get all bart st
  componentDidMount() {
    this.props.getBartStations(100, "16TH");
  }

  render() {
    return  (
      <div>
        <Search getBartStations={this.props.getBartStations} getAllBartStations={this.props.allBarts} loc={this.props.coords} clearErrors={this.props.clearErrors} />
        <BartMap location={this.props.allBartStations} bartMarkers ={this.props.bart} attractionMarkers={this.props.attractions} />
        <Attractions attractions={this.props.attractions}/>
      </div>
    )
  }
}

export default SplashPage;
