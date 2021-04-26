import { createStore, combineReducers } from 'redux';
import { Players } from './Players';
import { Schedule } from './Schedule';

export const ConfigureStore = () => {
    const store = createStore(
<<<<<<< HEAD
        combineReducers({
            players: Players,
            schedule: Schedule
        }),
=======
        Reducer,
        initialState,
>>>>>>> 7b10857d2094edf05298a88ea581636fa757dc50
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}