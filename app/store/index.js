import {createStore} from 'redux';
import reducers from '../reducers';
//initState为初始的状态
export function configureStore(initState) {
    return createStore(reducers,initState,
        window.devToolsExtension?window.devToolsExtension():undefined
    )
}
//redux-tools