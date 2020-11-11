import { reactive, h } from "resee";
import classnames from 'classnames';

import './index.less';

function htmlDecode(input){
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

export default ({
    code,
    component,
}: {
    code: string,
    component: Function,
}) => {

    let handleCodeRef = (dom: HTMLElement) => {
        setTimeout(() => {
            // @ts-ignore
            dom.innerHTML = Prism.highlight(htmlDecode(dom.innerHTML), Prism.languages.javascript);
        });
    };

    const Component = component;

    return <div className="codebox">
        <div>
            <pre><code ref={handleCodeRef} dangerouslySetInnerHTML={{__html: code}}></code></pre>
        </div>

        <div className="demo">
            <Component />
        </div>
    </div>;
}
