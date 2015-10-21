/*!
 * Fake Pseudo Classes Generator v1.0
 * https://github.com/justb81/jsFakePseudoClasses
 *
 * Copyright (c) 2015 Bastian Rang (ipunkt Business Solutions)
 * Released under the MIT license
 *
 * Date: 2015-10-21
 */
(function () {
    "use strict";

    /**
     * need styleSheets-Array
     */
    if (!document.styleSheets) {
        return;
    }

    /**
     * Debug output if attribute data-debug on script-tag is true
     * @type {boolean}
     */
    var debug = (document.currentScript && document.currentScript.getAttribute('data-debug') == 'true');

    /**
     * Regular expression containing all matching pseudo-classes
     * @type {RegExp}
     */
    var selector = /:(focus|hover|active|visited|target|valid|invalid)/;

    var i, j, match, changedSelector;

    window.console && debug && console.log(selector);
    for (i = 0; i < document.styleSheets.length; ++i) {
        if (document.styleSheets[i].cssRules !== null) {
            for (j = 0; j < document.styleSheets[i].cssRules.length; ++j) {
                if (match = selector.exec(document.styleSheets[i].cssRules[j].selectorText)) {
                    window.console && debug && console.log('Rule:', document.styleSheets[i].cssRules[j].selectorText, document.styleSheets[i].cssRules[j].style.cssText);
                    window.console && debug && console.log('Match:', match);
                    changedSelector = document.styleSheets[i].cssRules[j].selectorText.replace(match[0], '.fake-' + match[1]);
                    document.styleSheets[i].insertRule(changedSelector + '{' + document.styleSheets[i].cssRules[j].style.cssText + '}', document.styleSheets[i].cssRules.length);
                }
            }
        }
    }

}());
