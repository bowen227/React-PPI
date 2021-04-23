import { PLAYERS } from '../shared/players';
import { SCHEDULE } from '../shared/schedule';

export const initialState = {
    players: PLAYERS,
    schedule: SCHEDULE,
    association: '',
    coach: '',
    teamName: '',
    league: '',
    eventModal: false,
    playerModal: false
}

export const Reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADDED_NEW_EVENT":
            newState.schedule = newState.schedule.unshift(action.payload)
            return state
        default:
            return state
    }
}