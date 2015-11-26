import React from 'react';
import axios from 'axios';

class SkipNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render() {
    return (
      <div id="skip"><a href="#content">Skip to Main Content</a></div>
    );
  }
}

SkipNavigation.propTypes = {
  id: React.PropTypes.string,
  lang: React.PropTypes.string,
  linkText: React.PropTypes.string,
  target: React.PropTypes.string,
};


SkipNavigation.defaultProps = {
  id: 'skip',
  lang: 'en',
  linkText: 'Skip to Main Content',
  target: null,
};

export default SkipNavigation;
