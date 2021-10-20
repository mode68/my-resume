import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavContextProvider from './store/nav-context';

ReactDOM.render(<NavContextProvider><App /></NavContextProvider>, document.getElementById('root'));
