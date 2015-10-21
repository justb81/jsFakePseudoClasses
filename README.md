# Javascript Fake Pseudo Classes Generator
This javascript generates fake classes in the browser for any defined styles containing pseudo-classes like :focus or :hover.

You can use these classes in your styleguide to show styles that else would been hidden or need to be defined separately in your general production stylesheet.

## Usage
1. include the javascript-file at the bottom of your html-file.
2. use fake-classes on your elements
 * `fake-hover` for hovering state of an element
 * `fake-focus` to show what an element looks when it is focused
 * `fake-target` to show what an element looks when it is targeted
 * `fake-active` for the active state of a link
 * `fake-visited` for the visited state of a link
 * `fake-valid` for the valid state of an input element
 * `fake-invalid` for the visited state of an input element
3. set a data attribute `data-debug="true"` on the script tag and see some debug output.

## Example
For an example look at tests/index.html

# License
MIT License
