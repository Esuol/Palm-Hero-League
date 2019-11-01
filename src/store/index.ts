import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// 引入reducer
import reducers from './reducer';

// 创建store实例
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
        // applyMiddleware(thunk, logger)
    )
);

export default store;

