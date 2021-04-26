import { PLAYERS } from '../shared/players';
import { SCHEDULE } from '../shared/schedule';

export const initialState = {
    players: PLAYERS,
    // schedule: SCHEDULE,
    association: 'Hixson Youth Association',
    coach: 'Brent Owen',
    teamName: 'Pirates',
    league: '6U',
}

export const Reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        // case "ADDED_NEW_EVENT":
        //     newState.schedule = newState.schedule.unshift(action.payload)
        //     return state
        case "ADDED_PLAYER":
            newState.players = newState.players.push(action.payload)
        default:
            return state
    }
}