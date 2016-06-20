import React from 'react';
import Radium from 'radium';

const styles = {
  visuallyHidden: {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    ':focus': {
      left: 'auto',
      width: 'auto',
      height: 'auto',
    },
  },
};

const SkipNavigation = (props) => {
  if (props.target) {
    return (
      <a id={props.id} href={'#' + props.target} style={styles.visuallyHidden}>
      {props.linkText}
      </a>
    );
  }

  // If the target is not set, it is better to have no skip navigation link
  // than a broken one, so we'll just output an empty span.
  return (<span></span>);
};


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

export default Radium(SkipNavigation);
