import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  componentDidUpdate() {

  }

  render() {
    return (
      <div>1</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      hideModal: bindActionCreators(() => {}, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
