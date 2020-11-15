'use strict';

const marked = require('marked');
const fs = require('fs-extra-promise');
const path = require('path');

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

marked.use({
    renderer: {
        code(code, lang) {
            if (lang === 'demo') {
                const escapeCode = escapeHtml(code);
                return `{(function() {
                    const mod = {
                        exports: {},
                    };
                    (function(module) {
                        ${code.replace('export default', 'module.exports =')}
                    })(mod)
                    const component = mod.exports;
                    return <CodeBox
                        component={component}
                        code={decodeURIComponent("${encodeURIComponent(escapeCode)}")}
                    />;
                })()}
                `;
            } else {
                return `<pre><code>${escapeCode}</code></pre>`;
            }
        }
    }
})

module.exports = function markdownLoader(source) {
    const content = marked(source);
    return `
    import { h, reactive, computed, autorun, $if, $map, Component } from 'overdom';
    import CodeBox from '${path.join(__dirname, './code-box')}'
    export default class Demo extends Component {
        render() {
            return <div>${content}</div>;
        }
    }`;
}
