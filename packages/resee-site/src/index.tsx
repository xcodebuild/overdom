import './index.less';
import Header from './components/header';
import Content from './components/content';
import { render,  h, reactive } from 'resee';

const App = () => {
    const mdContent = reactive('# Hello');
    return <div className="page-container">
        <Header />
        <div className="content-container">
            <Content content={mdContent}/>
        </div>
    </div>;
}

render(<App />, document.getElementById('app'));
