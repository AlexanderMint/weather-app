import React from 'react';
import PropTypes from 'prop-types';
import SearchField from 'material-ui-search-bar';

import './SearchBar.less';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: null
    };
  }

  handleOnRequestSearch = () => {
    this.props.router.push(`/search/${this.state.searchInput}`);
  }

  handleOnChangeSearch = (input) => {
    this.setState({
      searchInput: input
    });
  }

  render() {
    return (
      <div className="search-bar">
        <SearchField
          hintText="Your city name"
          onRequestSearch={this.handleOnRequestSearch}
          onChange={this.handleOnChangeSearch}
        />
      </div>
    );
  }
}

SearchBar.defaultProps = {
};

SearchBar.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
