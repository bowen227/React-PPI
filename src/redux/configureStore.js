import { createStore, combineReducers } from 'redux';
import { Players } from './Players';
import { Schedule } from './Schedule';
import { Teams } from './Teams';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: Players,
            schedule: Schedule,
            teams: Teams
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}