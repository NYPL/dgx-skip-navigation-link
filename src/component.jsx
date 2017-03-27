import React from 'react';

const SkipNavigation = (props) => {
  if (props.target) {
    return (
      <nav id={props.id} aria-label={props.skipLabel} >
        <ul>
	  <li>
            <a href={`#${props.target}`} >
              {props.linkText}
            </a>
	  </li>
	  <li>
            <a href={props.a11yLink} >
              {props.a11yText}
            </a>
          </li>
        </ul>
      </nav>
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
  skipLabel: React.PropTypes.string,
};


SkipNavigation.defaultProps = {
  id: 'skip',
  lang: 'en',
  linkText: 'Skip to Main Content',
  a11yText: 'Click to learn about accessibility at the Library',
  a11yLink: '//www.nypl.org/accessibility',
  skipLabel: 'Skip Navigation',
};

export default SkipNavigation;
