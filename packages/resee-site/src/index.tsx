import './index.less';
import Header from './components/header';
import { render,  h } from 'resee';

const App = () => {
    return <div>
        <Header />
    </div>;
}

render(<App />, document.getElementById('app'));
