import React from 'react';
import { bindActionCreators } from 'redux';
import { Spinner } from 'react-redux-spinner';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

/* eslint-disable react/prop-types */
class App extends React.Component {
  componentWillMount() {
    // this.props.actions.getTranslations(this.props.locale);
  }

  render() {
    return (
      <div>
        <RaisedButton label="Default" />
        {this.props.children}
        <Spinner config={{ parent: '#main-box' }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { locale } = state;

  return {
    locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTranslations: bindActionCreators(() => {}, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* eslint-enable react/prop-types */
