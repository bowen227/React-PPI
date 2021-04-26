import { createStore, combineReducers } from 'redux';
import { Players } from './Players';
import { Schedule } from './Schedule';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: Players,
            schedule: Schedule
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}