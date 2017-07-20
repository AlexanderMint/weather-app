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
            <div className="divider" />
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
            <div className="divider" />
            <div className="city-card__forecasts">
              <h2 className="city-card__forecasts-header">Forecast for 7 days</h2>
              <ul className="forecast">
                <li className="forecast__day">
                  <div className="forecast__date">Wed 19 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="S" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
                <li className="forecast__day">
                  <div className="forecast__date">Thu 20 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="T" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
                <li className="forecast__day">
                  <div className="forecast__date">Fri 21 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="U" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
                <li className="forecast__day">
                  <div className="forecast__date">Sat 22 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="W" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
                <li className="forecast__day">
                  <div className="forecast__date">Sun 23 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="V" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
                <li className="forecast__day">
                  <div className="forecast__date">Mon 24 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="X" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
                <li className="forecast__day">
                  <div className="forecast__date">Tue 25 Jul</div>
                  <div className="forecast__sky-state"><span className="meteocons" data-icon="Y" /></div>
                  <div className="forecast__temperature">
                    <span className="forecast__temperature-day">19.1 °C</span>
                    <span className="forecast__temperature-night">17.4 °C</span>
                  </div>
                  <div className="forecast__natural-phenomen">light rain</div>
                </li>
              </ul>
            </div>
            <div className="city-card__action">
              <button className="city-card__forecast-btn">Forecast for 7 days</button>
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
