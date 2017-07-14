import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from 'components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="app-box">
        <AppBar
          title="Weather App"
          iconElementLeft={<span />}
        />
        <SearchBar
          router={this.props.router}
        />
        <div className="content-box">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
