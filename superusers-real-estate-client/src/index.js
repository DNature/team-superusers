import ReactDOM from 'react-dom';
import ApolloProvider from './ApolloProvider';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(ApolloProvider, document.getElementById('root'));
serviceWorker.unregister();
