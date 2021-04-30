import { createStore, combineReducers } from 'redux';
import { Players } from './Players';
import { Schedule } from './Schedule';
import { Teams } from './Teams';
import { Coaches } from './Coaches';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: Players,
            schedule: Schedule,
            teams: Teams,
            coaches: Coaches
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}