import { reactive, h, autorun } from "resee";
import classnames from 'classnames';

import './index.less';

function htmlDecode(input){
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

export default class Codebox {
    @reactive props: {
        code: string,
        component: Function,
    }
    
    handleCodeRef(dom: HTMLElement) {
        setTimeout(() => {
            // @ts-ignore
            dom.innerHTML = Prism.highlight(htmlDecode(dom.innerHTML), Prism.languages.javascript);
        });
    };

    render() {
        const Component = this.props.component;
        return <div className="codebox">
            <div>
                <pre><code ref={this.handleCodeRef} dangerouslySetInnerHTML={{__html: this.props.code}}></code></pre>
            </div>

            <div className="demo">
                <Component />
            </div>
        </div>;

    }
}
