import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from 'react-redux-spinner';
import AppBar from 'material-ui/AppBar';
import SearchBar from 'components/SearchBar';

import { getCities } from 'redux/modules/cities';

class App extends React.Component {
  componentWillMount() {
    this.props.actions.getCities();
  }

  render() {
    return (
      <div className="app-box">
        <AppBar
          className="header"
          title="Weather App"
          iconElementLeft={<span />}
        />
        <SearchBar
          router={this.props.router}
        />
        <div className="content-box">{this.props.children}</div>
        <Spinner config={{ parent: '#main-box' }} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCities: bindActionCreators(getCities, dispatch)
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
