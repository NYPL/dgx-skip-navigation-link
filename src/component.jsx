import React from 'react';
import Radium from 'radium';

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
    if (this.props.target) {
      return (
	<a id={this.props.id} href={'#' + this.props.target} style={styles.visuallyHidden}>
	{this.props.linkText}
	</a>
      );
    }

    // If the target is not set, it is better to have no skip navigation link
    // than a broken one, so we'll just output an empty span.
    return (<span></span>);
  }
}

SkipNavigation.propTypes = {
  id: React.PropTypes.string,
  lang: React.PropTypes.string,
  linkText: React.PropTypes.string,
  target: React.PropTypes.string.isRequired,
};


SkipNavigation.defaultProps = {
  id: 'skip',
  lang: 'en',
  linkText: 'Skip to Main Content',
};

const styles = {
  visuallyHidden: {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
  },
}

export default SkipNavigation;
