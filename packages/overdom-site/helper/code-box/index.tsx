import { reactive, h, autorun, Component } from "overdom";
import classnames from 'classnames';

import './index.less';

function htmlDecode(input){
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

export default class Codebox extends Component<{
    component: Function,
    code: string,
}> {
    @reactive code: string;

    constructor(props) {
        super(props);
        this.code = props.code;
    }
    
    render() {
        const Component = this.props.component;
        return <div className="codebox">
            <div>
                <pre><code dangerouslySetInnerHTML={{__html: this.code}}></code></pre>
            </div>

            <div className="demo">
                <Component />
            </div>
        </div>;

    }
}
