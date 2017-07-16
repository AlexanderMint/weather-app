import React from 'react';
// import PropTypes from 'prop-types';

class CityWidget extends React.Component {

  render() {
    return (
      <div className="city">
        <h2 className="city__header"> Current weather and forecasts in your city</h2>
      </div>
    );
  }
}

CityWidget.defaultProps = {
};

CityWidget.propTypes = {
  // router: PropTypes.shape({
  //   push: PropTypes.func,
  // }).isRequired,
};

export default CityWidget;
