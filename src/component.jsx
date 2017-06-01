import React from 'react';
import PropTypes from 'prop-types';

const SkipNavigation = (props) => {
  if (props.target) {
    return (
      <div id={props.id} tabIndex="-1">
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
  id: PropTypes.string,
  lang: PropTypes.string,
  linkText: PropTypes.string,
  target: PropTypes.string.isRequired,
  a11yText: PropTypes.string,
  a11yLink: PropTypes.string,
};


SkipNavigation.defaultProps = {
  id: 'skip',
  lang: 'en',
  linkText: 'Skip to Main Content',
  a11yText: 'Click to learn about accessibility at the Library',
  a11yLink: '//www.nypl.org/accessibility',
};

export default SkipNavigation;
