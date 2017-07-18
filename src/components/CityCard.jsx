import React from 'react';
// import PropTypes from 'prop-types';

import './CityCard.less';

class CityCard extends React.Component {

  render() {
    console.log(this.props.currentWeather);

    return (
      <div className="city-card">
        <h2 className="city-card__header"> Current weather and forecasts in your city</h2>
        <div className="main-grid1">
          <div className="main-grid1-pos">
            <span />
          </div>
          <h2>28<sup className="degree">°</sup><span>F</span></h2>
          <p>Washington</p>
          <div className="main-grid1-grids">
            <div className="main-grid1-grid-left">
              <p>40<sup className="degree">°</sup> 20<sup className="degree">°</sup></p>
              <h3>Mostly Cloudy</h3>
            </div>
            <div className="main-grid1-grid-right">
              <p>PM<span>12:40</span>FRI SEP.28</p>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    );
  }
}

CityCard.defaultProps = {
};

CityCard.propTypes = {
  // router: PropTypes.shape({
  //   push: PropTypes.func,
  // }).isRequired,
};

export default CityCard;
