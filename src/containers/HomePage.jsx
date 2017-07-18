import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CityCard from 'components/CityCard';
// import { initialData } from 'config';

import { getCurrentWeather } from 'redux/modules/weather';

class HomePage extends React.Component {
  componentWillMount() {
    // this.props.actions.getCurrentWeather(initialData.defaultCityID);
  }

  render() {
    const { currentWeather } = this.props;

    return (
      <div>
        <CityCard
          currentWeather={currentWeather}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { weather } = state;

  return {
    currentWeather: weather.current
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCurrentWeather: bindActionCreators(getCurrentWeather, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
