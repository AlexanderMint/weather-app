import React from 'react';
import Paper from 'material-ui/Paper';
// import PropTypes from 'prop-types';

import './CityCard.less';

class CityCard extends React.Component {

  render() {
    console.log(this.props.currentWeather);

    return (
      <div className="city-card">
        <h2 className="city-card__header"> Current weather and forecasts in your city</h2>
        <div>
          <Paper className="city-card__box" zDepth={1}>
            <div className="city-card__sky-icon">
              <span className="meteocons" data-icon="0" />
            </div>
            <div className="city-card__temperature">
              28<sup>°</sup>
              <span className="city-card__temperature-unit">F</span>
            </div>
            <div
              className="city-card__city-name"
              title="Washington"
            >
              Washington
              <div className="city-card__sky-state city-card__sky-state--city-name">Scattered clouds</div>
            </div>
            <div className="city-card__date-time">
              <span className="city-card__time">PM<span>12:40</span></span>
              <span className="city-card__date">FRI SEP.28</span>
            </div>
            <div className="city-card__info clear-fix">
              <dl className="city-card__info-list">
                <dt>Wind:</dt>
                <dd>Light breeze, 2.0 m/s, West - southwest ( 250 )</dd>
                <dt>Humidity:</dt>
                <dd>82 %</dd>
                <dt>Pressure:</dt>
                <dd>1016 hpa</dd>
              </dl>
              <dl className="city-card__info-list">
                <dt>Cloudiness:</dt>
                <dd>Scattered clouds</dd>
                <dt>Sunrise:</dt>
                <dd>04:11</dd>
                <dt>Sunset:</dt>
                <dd>20:58</dd>
              </dl>
            </div>
          </Paper>
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
