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
      <div id={props.id} style={styles.visuallyHidden} tabIndex="-1">
        <a href={`#${props.target}`} >
          {props.linkText}
        </a>
        <a href={props.a11yLink} >
          {props.a11yText}
        </a>
      </div>
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
  a11yText: React.PropTypes.string,
  a11yLink: React.PropTypes.string,
};


SkipNavigation.defaultProps = {
  id: 'skip',
  lang: 'en',
  linkText: 'Skip to Main Content',
  a11yText: 'Click to learn about accessibility at the Library',
  a11yLink: '//www.nypl.org/accessibility',
};

export default Radium(SkipNavigation);
