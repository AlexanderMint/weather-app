import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchPage extends React.Component {
  componentDidUpdate() {

  }

  render() {
    return (
      <div>Search Input: {this.props.params.input}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
