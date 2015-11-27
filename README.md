# Skip Navigation Link

A visually hidden skip navigation link that will be accessible to screen
readers. See
["Skip Navigation" Links](http://webaim.org/techniques/skipnav/).

## Usage

    import SkipNavigation from 'dgx-skip-navigation-link';

	<SkipNavigation target={'maincontent'} />

The skip navigation link must be the first link on the page so that if the user
presses their TAB key, the link will be first in order to be focused. If the
target of the link is not naturally focusable, as a div is not, it should be
given a tabindex of -1. This allows the element to receive programmatic focus
while being ignored during normal navigation flow -- i.e. a user cannot tab to
the element with the keyboard, but focus can be given to it by action such as
clicking a skip navigation link. When the element receives focus, this indicates
to screen readers that the contents of the element should be read. See
[Keyboard Accessibility: Tabindex](http://webaim.org/techniques/keyboard/tabindex).

## Props

- `id`: ID of the skip navigation link element (String, default: "skip")
- `lang`: Language. Not used, but provided for future internationalization
  (String, default: "en")
- `linkText`: Text content of the generated link (String, default: "Skip to Main
  Content")
- `target`: ID of the element to focus when the link is activated (String,
  REQUIRED)

If no `target` is provided, an empty span will be output rather than a skip
navigation link since it no link would be better than a broken one.

## Accesibility

The method of visually hiding the link is that recommended by
[CSS in Action: Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/).

The recommended provisions for sighted users of keyboard navigation have not yet
been included in this component.
