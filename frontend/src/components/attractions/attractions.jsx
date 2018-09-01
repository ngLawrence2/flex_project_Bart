import React from 'react';
import BartMap from '../map/map.jsx';
import attractions from '../seeds.jsx';


class Attractions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="attractions-body">
          <div className="attractions-header">
          Places to Explore
          </div>
          <div>
            <ul className="test-list">
              <p className="attractions-desc">{attractions[4].name}</p>
              <li><img src={ attractions[4].image } height="400" width="600" /></li>
                <p className="attractions-desc">{attractions[4].description}</p>
              <li>Attraction2 Photo and Title here</li>
                <p className="attractions-desc">Description2 here</p>
              <li>Attraction3 Photo and Title here</li>
                <p className="attractions-desc">Description3 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description4 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description5 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description6 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description7 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description8 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description9 here</p>
              <li>Attraction3 Title here</li>
                <p className="attractions-desc">Description10 here</p>
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
